import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetSubscriptionsByCouponIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=coupon_id" })
  couponId: string;
}

export class GetSubscriptionsByCouponIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsByCouponIdPathParams;
}

export class GetSubscriptionsByCouponId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Subscription })
  data?: shared.Subscription[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
  paginationMetadata?: Record<string, any>;
}

export class GetSubscriptionsByCouponIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSubscriptionsByCouponId200ApplicationJSONObject?: GetSubscriptionsByCouponId200ApplicationJSON;
}