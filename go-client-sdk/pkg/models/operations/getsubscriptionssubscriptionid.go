package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetSubscriptionsSubscriptionIDPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type GetSubscriptionsSubscriptionIDRequest struct {
	PathParams GetSubscriptionsSubscriptionIDPathParams
}

type GetSubscriptionsSubscriptionIDResponse struct {
	ContentType  string
	StatusCode   int64
	Subscription *shared.Subscription
}
