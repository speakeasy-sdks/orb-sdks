import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Coupon
/** 
 * A coupon represents a reusable discount configuration, and have an attached redemption code that can be issued to your end users. Coupons are most often used in self-serve signup or upgrade flows in your checkout experience or billing portal.
 * 
 * To redeem a coupon, pass the `redemption_code` property in the [create subscription](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription) or [schedule plan change](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription-schedule-plan-change) request. 
 * 
**/
export class Coupon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=duration_in_months" })
  durationInMonths?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=max_redemptions" })
  maxRedemptions?: number;

  @SpeakeasyMetadata({ data: "json, name=redemption_code" })
  redemptionCode: string;

  @SpeakeasyMetadata({ data: "json, name=times_redeemed" })
  timesRedeemed?: number;
}


// CouponInput
/** 
 * A coupon represents a reusable discount configuration, and have an attached redemption code that can be issued to your end users. Coupons are most often used in self-serve signup or upgrade flows in your checkout experience or billing portal.
 * 
 * To redeem a coupon, pass the `redemption_code` property in the [create subscription](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription) or [schedule plan change](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription-schedule-plan-change) request. 
 * 
**/
export class CouponInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=duration_in_months" })
  durationInMonths?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=max_redemptions" })
  maxRedemptions?: number;

  @SpeakeasyMetadata({ data: "json, name=redemption_code" })
  redemptionCode: string;

  @SpeakeasyMetadata({ data: "json, name=times_redeemed" })
  timesRedeemed?: number;
}
