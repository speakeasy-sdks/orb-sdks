import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



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
  @SpeakeasyMetadata({ data: "json, name=align_billing_with_plan_change_date" })
  alignBillingWithPlanChangeDate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=change_date" })
  changeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=change_option" })
  changeOption: PostSubscriptionsSubscriptionIdSchedulePlanChangeRequestBodyChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=coupon_redemption_code" })
  couponRedemptionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=external_plan_id" })
  externalPlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_id" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=price_overrides" })
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
