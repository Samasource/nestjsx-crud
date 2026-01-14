import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CrudRequest } from '@sama/nestjsx-crud';
import { QueryFilter } from '@sama/nestjsx-crud-request';
import { TypeOrmCrudService } from '../typeorm-crud.service';
import * as _ from 'lodash';
import { DeepPartial, FindManyOptions, ObjectLiteral } from 'typeorm';
import { ComparisonOperatorEx, isCustomOperator } from './comparison-operator-ex';

/**
 * Base TypeORM Crud Service class that slightly modifies default behavior of @rewiko/crud-typeorm
 * - Returns NotFoundException (404) when updating or deleting a non existing entity.
 * - Wraps any exception in BadRequestException to be processed by NestJS exception filter
 * - Supports updating relations by id and returning the nested entities when requested
 *   - This happens when following this approach: https://typeorm.io/#/relations-faq/how-to-use-relation-id-without-joining-relation
 * - Add additional search query filters to compare array type data specifically for PostgreSQL
 */
export class TypeOrmCrudBaseService<T> extends TypeOrmCrudService<T> {
  async createOne(request: CrudRequest, dto: DeepPartial<T>): Promise<T> {
    return super.createOne(request, dto).catch((error) => {
      throw new BadRequestException(error.message);
    });
  }

  async updateOne(request: CrudRequest, dto: DeepPartial<T>): Promise<T> {
    await this.ensureEntityExistsOrFail(request);

    const shallowRequest = this.getShallowRequest(request);

    return super
      .updateOne(shallowRequest, dto as DeepPartial<T>)
      .then(() => this.getOne(request))
      .catch((error) => {
        throw new BadRequestException(error.message);
      });
  }

  async replaceOne(request: CrudRequest, dto: DeepPartial<T>): Promise<T> {
    await this.ensureEntityExistsOrFail(request);

    const shallowRequest = this.getShallowRequest(request);

    return super
      .replaceOne(shallowRequest, dto as DeepPartial<T>)
      .then(() => this.getOne(request))
      .catch((error) => {
        throw new BadRequestException(error.message);
      });
  }

  async deleteOne(request: CrudRequest): Promise<void | T> {
    await this.ensureEntityExistsOrFail(request);

    return super.deleteOne(request).catch((error) => {
      throw new BadRequestException(error.message);
    });
  }

  /**
   * Throws NotFoundException with contextual message of the entity
   */
  throwNotFoundException(): NotFoundException {
    return super.throwNotFoundException(this.repo.metadata.targetName);
  }

  private getShallowRequest(request: CrudRequest) {
    return _.merge({}, request, {
      options: {
        routes: {
          createOneBase: { returnShallow: true },
          updateOneBase: { returnShallow: true },
          replaceOneBase: { returnShallow: true },
        },
      },
    });
  }

  /**
   * Ensures entity exists, throws NotFoundException (404) otherwise
   * @param request
   */
  private async ensureEntityExistsOrFail(request: CrudRequest) {
    const entity = await this.getOne(request);
    if (!entity) {
      this.throwNotFoundException();
    }
  }

  /**
   * Gets parameter values from the request
   * @param request CRUD request
   * @param paramName Parameter name
   */
  protected getParameter(request: CrudRequest, paramName: string): any {
    const paramsFilters = this.getParamFilters(request.parsed);
    return paramsFilters[paramName];
  }

  /**
   * Adds support to additional query operators:
   * - $contEx: Does a first array contains the second using the "@>" operator
   * - $ovlpEx: Does a overlap comparison between two arrays, it means, if have elements in common
   *
   * For more information about the operators see https://www.postgresql.org/docs/13/functions-array.html#ARRAY-OPERATORS-TABLE
   * Note that this is particularly designed to work with PostgreSQL 9.6 to 13. Other versions or DB systems could behave different or don't even work
   * Original method: https://github.com/nestjsx/crud/blob/bbea082a3f0fc7c1be42a79164f41b8449ad2251/packages/crud-typeorm/src/typeorm-crud.service.ts#L906
   */
  protected mapOperatorsToQuery(
    cond: QueryFilter,
    param: any,
  ): { str: string; params: ObjectLiteral } {
    if (isCustomOperator(cond.operator)) {
      return this.mapCustomOperatorsToQuery(cond, param);
    } else {
      return super.mapOperatorsToQuery(cond, param);
    }
  }

  private mapCustomOperatorsToQuery(
    cond: QueryFilter,
    param: any,
  ): { str: string; params: ObjectLiteral } {
    const field = super.getFieldWithAlias(cond.field);

    let str: string;
    let params: ObjectLiteral;

    /**
     * This only works with `search` conditions, not `filter`
     * For example:
     *  this should work:     s={"$and":[{"$or":[{"platformRoleIds":{"$ovlpEx": [1, 2]}}]}]}
     *  this should not work: filter=platformRoleIds||$ovlpEx||[1, 2]
     * It should not be a problem since `filter` is deprecated. See https://github.com/nestjsx/crud/issues/497#issuecomment-624449213
     */
    switch (cond.operator as ComparisonOperatorEx) {
      // contains operator. First array contains the second
      case '$contEx':
        this.checkIsArrayOrFail(cond.value);

        str = `${field} @> :${param}`;
        params = { [param]: `{${cond.value}}` };
        break;

      //  overlap (have elements in common) between two arrays
      case '$ovlpEx':
        this.checkIsArrayOrFail(cond.value);

        str = `${field} && :${param}`;
        params = { [param]: `{${cond.value}}` };
        break;

      default:
        throw new Error(`Invalid operator: ${cond.operator}`);
    }

    return { str, params };
  }

  private checkIsArrayOrFail(value: any): void {
    if (!Array.isArray(value)) {
      this.throwBadRequestException(`Invalid column '${value}' value`);
    }
  }
}
