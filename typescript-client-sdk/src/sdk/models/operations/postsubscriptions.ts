import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Transform, Type } from "class-transformer";

export enum PostSubscriptionsApplicationJSONExternalMarketplaceEnum {
    Google = "google",
    Aws = "aws",
    Azure = "azure"
}

export class PostSubscriptionsApplicationJSONPhaseOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;
}

export class PostSubscriptionsApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "align_billing_with_subscription_start_date" })
  alignBillingWithSubscriptionStartDate?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "coupon_redemption_code" })
  couponRedemptionCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customer_id" })
  customerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "default_invoice_memo" })
  defaultInvoiceMemo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_marketplace" })
  externalMarketplace?: PostSubscriptionsApplicationJSONExternalMarketplaceEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "external_marketplace_reporting_id" })
  externalMarketplaceReportingId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_plan_id" })
  externalPlanId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum_amount" })
  minimumAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "net_terms" })
  netTerms?: number;

  @SpeakeasyMetadata({ elemType: PostSubscriptionsApplicationJSONPhaseOverrides })
  @Expose({ name: "phase_overrides" })
  @Type(() => PostSubscriptionsApplicationJSONPhaseOverrides)
  phaseOverrides?: PostSubscriptionsApplicationJSONPhaseOverrides[];

  @SpeakeasyMetadata()
  @Expose({ name: "plan_id" })
  planId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "price_overrides" })
  priceOverrides?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;
}

export class PostSubscriptionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: PostSubscriptionsApplicationJSON;
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