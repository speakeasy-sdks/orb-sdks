import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// Coupon
/** 
 * A coupon represents a reusable discount configuration, and have an attached redemption code that can be issued to your end users. Coupons are most often used in self-serve signup or upgrade flows in your checkout experience or billing portal.
 * 
 * To redeem a coupon, pass the `redemption_code` property in the [create subscription](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription) or [schedule plan change](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription-schedule-plan-change) request. 
 * 
**/
export class Coupon extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "archived_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  archivedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "duration_in_months" })
  durationInMonths?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "max_redemptions" })
  maxRedemptions?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "redemption_code" })
  redemptionCode: string;

  @SpeakeasyMetadata()
  @Expose({ name: "times_redeemed" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "duration_in_months" })
  durationInMonths?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "max_redemptions" })
  maxRedemptions?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "redemption_code" })
  redemptionCode: string;

  @SpeakeasyMetadata()
  @Expose({ name: "times_redeemed" })
  timesRedeemed?: number;
}