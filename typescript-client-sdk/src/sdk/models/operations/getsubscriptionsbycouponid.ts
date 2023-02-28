import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class GetSubscriptionsByCouponIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=coupon_id" })
  couponId: string;
}

export class GetSubscriptionsByCouponIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsByCouponIdPathParams;
}

export class GetSubscriptionsByCouponId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Subscription })
  @Expose({ name: "data" })
  @Type(() => shared.Subscription)
  data?: shared.Subscription[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
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