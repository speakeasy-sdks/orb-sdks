import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Customer } from "./customer";
import { Plan } from "./plan";
import { Expose, Transform, Type } from "class-transformer";


export class SubscriptionFixedFeeQuantitySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "price_id" })
  priceId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;
}

export class SubscriptionRedeemedCoupon extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "coupon_id" })
  couponId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;
}
export enum SubscriptionStatusEnum {
    Active = "active",
    Ended = "ended",
    Upcoming = "upcoming"
}

// Subscription
/** 
 * A subscription represents the purchase of a plan by a customer.
 * 
 * By default, subscriptions begin on the day that they're created and renew automatically for each billing cycle at the cadence that's configured in the plan definition.
 * 
 * Subscriptions also default to **beginning of month alignment**, which means the first invoice issued for the subscription will have pro-rated charges between the `start_date` and the first of the following month. Subsequent billing periods will always start and end on a month boundary (e.g. subsequent month starts for monthly billing).
 * 
 * Depending on the plan configuration, any _flat_ recurring fees will be billed either at the beginning (in-advance) or end (in-arrears) of each billing cycle. Plans default to **in-advance billing**. Usage-based fees are billed in arrears as usage is accumulated. In the normal course of events, you can expect an invoice to contain usage-based charges for the previous period, and a recurring fee for the following period.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active_plan_phase_order" })
  activePlanPhaseOrder?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "current_billing_period_end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  currentBillingPeriodEndDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "current_billing_period_start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  currentBillingPeriodStartDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => Customer)
  customer: Customer;

  @SpeakeasyMetadata()
  @Expose({ name: "default_invoice_memo" })
  defaultInvoiceMemo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate: Date;

  @SpeakeasyMetadata({ elemType: SubscriptionFixedFeeQuantitySchedule })
  @Expose({ name: "fixed_fee_quantity_schedule" })
  @Type(() => SubscriptionFixedFeeQuantitySchedule)
  fixedFeeQuantitySchedule: SubscriptionFixedFeeQuantitySchedule[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "net_terms" })
  netTerms?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "plan" })
  @Type(() => Plan)
  plan: Plan;

  @SpeakeasyMetadata()
  @Expose({ name: "redeemed_coupon" })
  @Type(() => SubscriptionRedeemedCoupon)
  redeemedCoupon?: SubscriptionRedeemedCoupon;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: SubscriptionStatusEnum;
}