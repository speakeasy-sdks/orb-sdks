import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostCouponsCouponIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=coupon_id" })
  couponId: string;
}

export class PostCouponsCouponIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCouponsCouponIdArchivePathParams;
}

export class PostCouponsCouponIdArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  coupon?: shared.Coupon;

  @SpeakeasyMetadata()
  statusCode: number;
}