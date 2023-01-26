package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityRequestBody struct {
	EffectiveDate *time.Time `json:"effective_date,omitempty"`
	PriceID       string     `json:"price_id"`
	Quantity      float64    `json:"quantity"`
}

type PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityRequest struct {
	PathParams PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityPathParams
	Request    *PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityRequestBody `request:"mediaType=application/json"`
}

type PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityResponse struct {
	ContentType  string
	StatusCode   int64
	Subscription *shared.Subscription
}
