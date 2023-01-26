package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetSubscriptionsByCouponIDPathParams struct {
	CouponID string `pathParam:"style=simple,explode=false,name=coupon_id"`
}

type GetSubscriptionsByCouponID200ApplicationJSON struct {
	Data               []shared.Subscription  `json:"data,omitempty"`
	PaginationMetadata map[string]interface{} `json:"pagination_metadata,omitempty"`
}

type GetSubscriptionsByCouponIDRequest struct {
	PathParams GetSubscriptionsByCouponIDPathParams
}

type GetSubscriptionsByCouponIDResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetSubscriptionsByCouponID200ApplicationJSONObject *GetSubscriptionsByCouponID200ApplicationJSON
}
