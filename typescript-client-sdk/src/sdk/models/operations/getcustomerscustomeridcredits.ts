import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCustomersCustomerIdCreditsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}


export class GetCustomersCustomerIdCredits200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=expiry_date" })
  expiryDate: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=per_unit_cost_basis" })
  perUnitCostBasis: string;
}


export class GetCustomersCustomerIdCredits200ApplicationJsonPaginationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=has_more" })
  hasMore: boolean;

  @SpeakeasyMetadata({ data: "json, name=next_cursor" })
  nextCursor?: string;
}


export class GetCustomersCustomerIdCredits200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetCustomersCustomerIdCredits200ApplicationJsonData })
  data: GetCustomersCustomerIdCredits200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
  paginationMetadata: GetCustomersCustomerIdCredits200ApplicationJsonPaginationMetadata;
}


export class GetCustomersCustomerIdCreditsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersCustomerIdCreditsPathParams;
}


export class GetCustomersCustomerIdCreditsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomersCustomerIdCredits200ApplicationJSONObject?: GetCustomersCustomerIdCredits200ApplicationJson;
}
