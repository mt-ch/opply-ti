import { ApiBaseSearchResponse } from "./base";

export interface ApiGetSupplierResponse extends ApiBaseSearchResponse {
  /** Results */
  results: Supplier[];
}

export interface Supplier {
  /** ID */
  id?: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Description */
  description?: string;
}
