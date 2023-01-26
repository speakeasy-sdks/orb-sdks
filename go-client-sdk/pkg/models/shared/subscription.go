package shared

import (
	"time"
)

type SubscriptionFixedFeeQuantitySchedule struct {
	EndDate   *time.Time `json:"end_date,omitempty"`
	PriceID   *string    `json:"price_id,omitempty"`
	Quantity  *float64   `json:"quantity,omitempty"`
	StartDate *time.Time `json:"start_date,omitempty"`
}

type SubscriptionRedeemedCoupon struct {
	CouponID  *string    `json:"coupon_id,omitempty"`
	EndDate   *time.Time `json:"end_date,omitempty"`
	StartDate *time.Time `json:"start_date,omitempty"`
}

type SubscriptionStatusEnum string

const (
	SubscriptionStatusEnumActive   SubscriptionStatusEnum = "active"
	SubscriptionStatusEnumEnded    SubscriptionStatusEnum = "ended"
	SubscriptionStatusEnumUpcoming SubscriptionStatusEnum = "upcoming"
)

// Subscription
// A subscription represents the purchase of a plan by a customer.
//
// By default, subscriptions begin on the day that they're created and renew automatically for each billing cycle at the cadence that's configured in the plan definition.
//
// Subscriptions also default to **beginning of month alignment**, which means the first invoice issued for the subscription will have pro-rated charges between the `start_date` and the first of the following month. Subsequent billing periods will always start and end on a month boundary (e.g. subsequent month starts for monthly billing).
//
// Depending on the plan configuration, any _flat_ recurring fees will be billed either at the beginning (in-advance) or end (in-arrears) of each billing cycle. Plans default to **in-advance billing**. Usage-based fees are billed in arrears as usage is accumulated. In the normal course of events, you can expect an invoice to contain usage-based charges for the previous period, and a recurring fee for the following period.
type Subscription struct {
	ActivePlanPhaseOrder          *float64                               `json:"active_plan_phase_order,omitempty"`
	AutoCollection                *bool                                  `json:"auto_collection,omitempty"`
	CreatedAt                     time.Time                              `json:"created_at"`
	CurrentBillingPeriodEndDate   *time.Time                             `json:"current_billing_period_end_date,omitempty"`
	CurrentBillingPeriodStartDate *time.Time                             `json:"current_billing_period_start_date,omitempty"`
	Customer                      Customer                               `json:"customer"`
	DefaultInvoiceMemo            *string                                `json:"default_invoice_memo,omitempty"`
	EndDate                       time.Time                              `json:"end_date"`
	FixedFeeQuantitySchedule      []SubscriptionFixedFeeQuantitySchedule `json:"fixed_fee_quantity_schedule"`
	ID                            string                                 `json:"id"`
	NetTerms                      *int64                                 `json:"net_terms,omitempty"`
	Plan                          Plan                                   `json:"plan"`
	RedeemedCoupon                *SubscriptionRedeemedCoupon            `json:"redeemed_coupon,omitempty"`
	StartDate                     time.Time                              `json:"start_date"`
	Status                        SubscriptionStatusEnum                 `json:"status"`
}
