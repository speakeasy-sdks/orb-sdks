import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Transform, Type } from "class-transformer";


export class PostSubscriptionsSubscriptionIdSchedulePlanChangePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}
export enum PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyChangeOptionEnum {
    RequestedDate = "requested_date",
    EndOfSubscriptionTerm = "end_of_subscription_term",
    Immediate = "immediate"
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "align_billing_with_plan_change_date" })
  alignBillingWithPlanChangeDate?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "change_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  changeDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "change_option" })
  changeOption: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyChangeOptionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "coupon_redemption_code" })
  couponRedemptionCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_plan_id" })
  externalPlanId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "plan_id" })
  planId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "price_overrides" })
  priceOverrides?: Record<string, any>[];
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSubscriptionsSubscriptionIdSchedulePlanChangePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBody;
}

export class PostSubscriptionsSubscriptionIdSchedulePlanChangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscription?: shared.Subscription;
}