import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class GetSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_customer_id" })
  externalCustomerId?: string;
}

export class GetSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSubscriptionsQueryParams;
}

export class GetSubscriptions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Subscription })
  @Expose({ name: "data" })
  @Type(() => shared.Subscription)
  data?: shared.Subscription[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  paginationMetadata?: Record<string, any>;
}

export class GetSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSubscriptions200ApplicationJSONObject?: GetSubscriptions200ApplicationJSON;
}