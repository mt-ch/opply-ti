import { ApiBaseSearchResponse } from "./base";

export interface ApiGetQuotesResponse extends ApiBaseSearchResponse {
  /** Results */
  results: Quote[];
}

export interface Quote {
  /** ID */
  id?: number;
  /**
   * Amount
   * @format decimal
   */
  amount: string;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Title
   * @minLength 1
   * @maxLength 100
   */
  title: string;
  /** Supplier id */
  supplier_id?: string;
}
