package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type PostSubscriptionsSubscriptionIDSchedulePlanChangePathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnum string

const (
	PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnumRequestedDate         PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnum = "requested_date"
	PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnumEndOfSubscriptionTerm PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnum = "end_of_subscription_term"
	PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnumImmediate             PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnum = "immediate"
)

type PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBody struct {
	AlignBillingWithPlanChangeDate *bool                                                                        `json:"align_billing_with_plan_change_date,omitempty"`
	ChangeDate                     *time.Time                                                                   `json:"change_date,omitempty"`
	ChangeOption                   PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnum `json:"change_option"`
	CouponRedemptionCode           *string                                                                      `json:"coupon_redemption_code,omitempty"`
	ExternalPlanID                 *string                                                                      `json:"external_plan_id,omitempty"`
	MinimumAmount                  *string                                                                      `json:"minimum_amount,omitempty"`
	PlanID                         *string                                                                      `json:"plan_id,omitempty"`
	PriceOverrides                 []map[string]interface{}                                                     `json:"price_overrides,omitempty"`
}

type PostSubscriptionsSubscriptionIDSchedulePlanChangeRequest struct {
	PathParams PostSubscriptionsSubscriptionIDSchedulePlanChangePathParams
	Request    *PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBody `request:"mediaType=application/json"`
}

type PostSubscriptionsSubscriptionIDSchedulePlanChangeResponse struct {
	ContentType  string
	StatusCode   int64
	Subscription *shared.Subscription
}
