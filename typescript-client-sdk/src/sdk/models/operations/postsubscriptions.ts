import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostSubscriptionsApplicationJsonExternalMarketplaceEnum {
    Google = "google",
    Aws = "aws",
    Azure = "azure"
}


export class PostSubscriptionsApplicationJsonPhaseOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;
}


export class PostSubscriptionsApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=align_billing_with_subscription_start_date" })
  alignBillingWithSubscriptionStartDate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=coupon_redemption_code" })
  couponRedemptionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=default_invoice_memo" })
  defaultInvoiceMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=external_marketplace" })
  externalMarketplace?: PostSubscriptionsApplicationJsonExternalMarketplaceEnum;

  @SpeakeasyMetadata({ data: "json, name=external_marketplace_reporting_id" })
  externalMarketplaceReportingId?: string;

  @SpeakeasyMetadata({ data: "json, name=external_plan_id" })
  externalPlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=net_terms" })
  netTerms?: number;

  @SpeakeasyMetadata({ data: "json, name=phase_overrides", elemType: PostSubscriptionsApplicationJsonPhaseOverrides })
  phaseOverrides?: PostSubscriptionsApplicationJsonPhaseOverrides[];

  @SpeakeasyMetadata({ data: "json, name=plan_id" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=price_overrides" })
  priceOverrides?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;
}


export class PostSubscriptionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: PostSubscriptionsApplicationJson;
}


export class PostSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSubscriptionsRequests;
}


export class PostSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscription?: shared.Subscription;
}
