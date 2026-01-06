import { CrudRequest } from '../../interfaces';
import * as _ from 'lodash';

export class CrudRequestHelper {
  static mergeSearchConditions(
    request: CrudRequest,
    searchCondition: typeof request.parsed.search,
  ): CrudRequest {
    if (this.isSearchParametersEmpty(request)) {
      request.parsed.search = {
        $and: [searchCondition],
      };
    } else {
      request.parsed.search = {
        $and: [searchCondition, request.parsed.search],
      };
    }
    return request;
  }

  static isSearchParametersEmpty(request: CrudRequest): boolean {
    // When no search parameter is set in the request, it is automatically set as `{ '$and': [ undefined, {} ] }`.
    // This method validates that the search parameter is practically empty in a fancy way

    // Check if the $and clause contains any value or if all values are falsy (in this case, an empty object `{}` is considered falsy)
    const andValues = [...(request.parsed.search.$and?.values() || [])];
    const isAndEmpty =
      andValues.length === 0 || andValues.every((value) => !value || _.isEmpty(value));

    // Check if the $or clause contains any value or if all values are falsy (in this case, an empty object `{}` is considered falsy)
    const orValues = [...(request.parsed.search.$or?.values() || [])];
    const isOrEmpty =
      orValues.length === 0 || orValues.every((value) => !value || _.isEmpty(value));

    return isAndEmpty && isOrEmpty;
  }
}
