import { CrudRequest } from '../../../interfaces';
import { CrudRequestHelper } from '../crud-request-helper';

describe('CrudRequestHelper', () => {
  describe('isSearchParametersEmpty', () => {
    it('should return true when the OR and AND search parameters are empty', () => {
      const request = { parsed: { search: {} } } as CrudRequest;
      const isEmpty = CrudRequestHelper.isSearchParametersEmpty(request);
      expect(isEmpty).toBe(true);
    });

    it('should return true when the AND search parameter is filled with falsy values', () => {
      const request = {
        parsed: { search: { $and: [undefined, {}] } },
      } as CrudRequest;
      const isEmpty = CrudRequestHelper.isSearchParametersEmpty(request);
      expect(isEmpty).toBe(true);
    });

    it('should return true when the OR search parameter is filled with falsy values', () => {
      const request = {
        parsed: { search: { $or: [undefined, {}] } },
      } as CrudRequest;
      const isEmpty = CrudRequestHelper.isSearchParametersEmpty(request);
      expect(isEmpty).toBe(true);
    });

    it('should return false when the AND search parameter is not empty', () => {
      const request = {
        parsed: { search: { $and: [{ field1: { $notin: [123, 456] } }] } },
      } as CrudRequest;
      const isEmpty = CrudRequestHelper.isSearchParametersEmpty(request);
      expect(isEmpty).toBe(false);
    });

    it('should return false when the OR search parameter is not empty', () => {
      const request = {
        parsed: { search: { $or: [{ field1: { $notin: [123, 456] } }] } },
      } as CrudRequest;
      const isEmpty = CrudRequestHelper.isSearchParametersEmpty(request);
      expect(isEmpty).toBe(false);
    });
  });

  describe('mergeSearchConditions', () => {
    it('should not use the current search parameters if it is empty', () => {
      const request = {
        parsed: { search: { $and: [undefined, {}] } },
      } as CrudRequest;

      const searchCondition = {
        $and: [{ field1: { $notin: [123, 456] } }],
      } as typeof request.parsed.search;

      const expectedCondition = {
        $and: [searchCondition],
      } as typeof request.parsed.search;

      const newRequest = CrudRequestHelper.mergeSearchConditions(
        request,
        searchCondition,
      );
      expect(newRequest.parsed.search).toStrictEqual(expectedCondition);
    });

    it('should add the old search condition if it is not empty', () => {
      const request = {
        parsed: { search: { $and: [{ field2: { $in: [789] } }] } },
      } as CrudRequest;

      const searchCondition = {
        $and: [{ field1: { $notin: [123, 456] } }],
      } as typeof request.parsed.search;

      const expectedCondition = {
        $and: [searchCondition, request.parsed.search],
      } as typeof request.parsed.search;

      const newRequest = CrudRequestHelper.mergeSearchConditions(
        request,
        searchCondition,
      );
      expect(newRequest.parsed.search).toStrictEqual(expectedCondition);
    });
  });
});
