import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetCouponsCouponIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=coupon_id" })
  couponId: string;
}

export class GetCouponsCouponIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCouponsCouponIdPathParams;
}

export class GetCouponsCouponIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  coupon?: shared.Coupon;

  @SpeakeasyMetadata()
  statusCode: number;
}