package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type PostSubscriptionsApplicationJSONExternalMarketplaceEnum string

const (
	PostSubscriptionsApplicationJSONExternalMarketplaceEnumGoogle PostSubscriptionsApplicationJSONExternalMarketplaceEnum = "google"
	PostSubscriptionsApplicationJSONExternalMarketplaceEnumAws    PostSubscriptionsApplicationJSONExternalMarketplaceEnum = "aws"
	PostSubscriptionsApplicationJSONExternalMarketplaceEnumAzure  PostSubscriptionsApplicationJSONExternalMarketplaceEnum = "azure"
)

type PostSubscriptionsApplicationJSONPhaseOverrides struct {
	Discount      map[string]interface{} `json:"discount,omitempty"`
	MinimumAmount *string                `json:"minimum_amount,omitempty"`
	Order         *float64               `json:"order,omitempty"`
}

type PostSubscriptionsApplicationJSON struct {
	AlignBillingWithSubscriptionStartDate *bool                                                    `json:"align_billing_with_subscription_start_date,omitempty"`
	AutoCollection                        *bool                                                    `json:"auto_collection,omitempty"`
	CouponRedemptionCode                  *string                                                  `json:"coupon_redemption_code,omitempty"`
	CustomerID                            *string                                                  `json:"customer_id,omitempty"`
	DefaultInvoiceMemo                    *string                                                  `json:"default_invoice_memo,omitempty"`
	ExternalCustomerID                    *string                                                  `json:"external_customer_id,omitempty"`
	ExternalMarketplace                   *PostSubscriptionsApplicationJSONExternalMarketplaceEnum `json:"external_marketplace,omitempty"`
	ExternalMarketplaceReportingID        *string                                                  `json:"external_marketplace_reporting_id,omitempty"`
	ExternalPlanID                        *string                                                  `json:"external_plan_id,omitempty"`
	MinimumAmount                         *string                                                  `json:"minimum_amount,omitempty"`
	NetTerms                              *int64                                                   `json:"net_terms,omitempty"`
	PhaseOverrides                        []PostSubscriptionsApplicationJSONPhaseOverrides         `json:"phase_overrides,omitempty"`
	PlanID                                *string                                                  `json:"plan_id,omitempty"`
	PriceOverrides                        []map[string]interface{}                                 `json:"price_overrides,omitempty"`
	StartDate                             *time.Time                                               `json:"start_date,omitempty"`
}

type PostSubscriptionsRequests struct {
	ApplicationXML []byte                            `request:"mediaType=application/xml"`
	Object         *PostSubscriptionsApplicationJSON `request:"mediaType=application/json"`
}

type PostSubscriptionsRequest struct {
	Request *PostSubscriptionsRequests
}

type PostSubscriptionsResponse struct {
	ContentType  string
	StatusCode   int64
	Subscription *shared.Subscription
}
