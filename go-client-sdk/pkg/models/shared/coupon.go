package shared

import (
	"time"
)

// Coupon
// A coupon represents a reusable discount configuration, and have an attached redemption code that can be issued to your end users. Coupons are most often used in self-serve signup or upgrade flows in your checkout experience or billing portal.
//
// To redeem a coupon, pass the `redemption_code` property in the [create subscription](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription) or [schedule plan change](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription-schedule-plan-change) request.
type Coupon struct {
	ArchivedAt       *time.Time             `json:"archived_at,omitempty"`
	Discount         map[string]interface{} `json:"discount"`
	DurationInMonths *int64                 `json:"duration_in_months,omitempty"`
	ID               *string                `json:"id,omitempty"`
	MaxRedemptions   *int64                 `json:"max_redemptions,omitempty"`
	RedemptionCode   string                 `json:"redemption_code"`
	TimesRedeemed    *int64                 `json:"times_redeemed,omitempty"`
}

// CouponInput
// A coupon represents a reusable discount configuration, and have an attached redemption code that can be issued to your end users. Coupons are most often used in self-serve signup or upgrade flows in your checkout experience or billing portal.
//
// To redeem a coupon, pass the `redemption_code` property in the [create subscription](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription) or [schedule plan change](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription-schedule-plan-change) request.
type CouponInput struct {
	Discount         map[string]interface{} `json:"discount"`
	DurationInMonths *int64                 `json:"duration_in_months,omitempty"`
	ID               *string                `json:"id,omitempty"`
	MaxRedemptions   *int64                 `json:"max_redemptions,omitempty"`
	RedemptionCode   string                 `json:"redemption_code"`
	TimesRedeemed    *int64                 `json:"times_redeemed,omitempty"`
}
