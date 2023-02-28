import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetCustomersCustomerIdCreditsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}

export class GetCustomersCustomerIdCreditsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersCustomerIdCreditsPathParams;
}

export class GetCustomersCustomerIdCredits200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance: number;

  @SpeakeasyMetadata()
  @Expose({ name: "expiry_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  expiryDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "per_unit_cost_basis" })
  perUnitCostBasis: string;
}

export class GetCustomersCustomerIdCredits200ApplicationJSONPaginationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "has_more" })
  hasMore: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "next_cursor" })
  nextCursor?: string;
}

export class GetCustomersCustomerIdCredits200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCustomersCustomerIdCredits200ApplicationJSONData })
  @Expose({ name: "data" })
  @Type(() => GetCustomersCustomerIdCredits200ApplicationJSONData)
  data: GetCustomersCustomerIdCredits200ApplicationJSONData[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  @Type(() => GetCustomersCustomerIdCredits200ApplicationJSONPaginationMetadata)
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