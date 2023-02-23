import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCustomersCustomerIdCreditsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}

export class GetCustomersCustomerIdCreditsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersCustomerIdCreditsPathParams;
}

export class GetCustomersCustomerIdCredits200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=expiry_date" })
  expiryDate: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=per_unit_cost_basis" })
  perUnitCostBasis: string;
}

export class GetCustomersCustomerIdCredits200ApplicationJSONPaginationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=has_more" })
  hasMore: boolean;

  @SpeakeasyMetadata({ data: "json, name=next_cursor" })
  nextCursor?: string;
}

export class GetCustomersCustomerIdCredits200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetCustomersCustomerIdCredits200ApplicationJSONData })
  data: GetCustomersCustomerIdCredits200ApplicationJSONData[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
  paginationMetadata: GetCustomersCustomerIdCredits200ApplicationJSONPaginationMetadata;
}

export class GetCustomersCustomerIdCreditsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomersCustomerIdCredits200ApplicationJSONObject?: GetCustomersCustomerIdCredits200ApplicationJSON;
}