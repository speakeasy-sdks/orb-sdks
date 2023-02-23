import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Customer } from "./customer";
import { Plan } from "./plan";


export class SubscriptionFixedFeeQuantitySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=price_id" })
  priceId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;
}

export class SubscriptionRedeemedCoupon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coupon_id" })
  couponId?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
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
  @SpeakeasyMetadata({ data: "json, name=active_plan_phase_order" })
  activePlanPhaseOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=current_billing_period_end_date" })
  currentBillingPeriodEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=current_billing_period_start_date" })
  currentBillingPeriodStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer: Customer;

  @SpeakeasyMetadata({ data: "json, name=default_invoice_memo" })
  defaultInvoiceMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=fixed_fee_quantity_schedule", elemType: SubscriptionFixedFeeQuantitySchedule })
  fixedFeeQuantitySchedule: SubscriptionFixedFeeQuantitySchedule[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=net_terms" })
  netTerms?: number;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan: Plan;

  @SpeakeasyMetadata({ data: "json, name=redeemed_coupon" })
  redeemedCoupon?: SubscriptionRedeemedCoupon;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: SubscriptionStatusEnum;
}