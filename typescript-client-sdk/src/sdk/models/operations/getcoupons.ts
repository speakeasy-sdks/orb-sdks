import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class GetCouponsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redemption_code" })
  redemptionCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_archived" })
  showArchived?: boolean;
}

export class GetCouponsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCouponsQueryParams;
}

export class GetCoupons200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Coupon })
  @Expose({ name: "data" })
  @Type(() => shared.Coupon)
  data?: shared.Coupon[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  paginationMetadata?: Record<string, any>;
}

export class GetCouponsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCoupons200ApplicationJSONObject?: GetCoupons200ApplicationJSON;
}