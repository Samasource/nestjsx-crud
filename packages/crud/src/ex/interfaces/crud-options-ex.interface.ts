import { CrudOptions } from '../../interfaces';

/**
 * Extension of CrudOptions from '@rewiko/crud
 * to support custom functionality.
 */
export interface CrudOptionsEx extends CrudOptions {
  permissionsPrefix: string;
}
