import { HttpCode, HttpStatus } from '@nestjs/common';
import * as _ from 'lodash';
import { Crud } from '../../decorators';
import { CrudOptions } from '../../interfaces';

/**
 * Custom extension of @rewiko/crud Crud decorator to support:
 * - Disable replaceOne (PUT) endpoint by default
 * - Set DELETE HTTP code to 204 (Default is 200)
 * @param options Decorator options
 */
export const CrudEx = (options: CrudOptions) => {
  const mergedCrudOptions = _.merge({}, options, {
    routes: {
      exclude: ['replaceOneBase'],
      deleteOneBase: {
        decorators: options.routes?.deleteOneBase?.decorators?.concat([
          HttpCode(HttpStatus.NO_CONTENT),
        ]),
      },
    },
  });

  return Crud(mergedCrudOptions);
};
