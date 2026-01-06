import { ComparisonOperator, SFiledValues } from '@sama/nestjsx-crud-request';

export type ComparisonOperatorEx = ComparisonOperator | keyof SFieldOperatorEx;

export type SFieldOperatorEx = {
  $ovlpEx?: SFiledValues;
  $contEx?: SFiledValues;
};

export function isCustomOperator(operator: ComparisonOperatorEx): boolean {
  return ['$ovlpEx', '$contEx'].includes(operator);
}
