package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetSubscriptionsSubscriptionIDPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type GetSubscriptionsSubscriptionIDRequest struct {
	PathParams GetSubscriptionsSubscriptionIDPathParams
}

type GetSubscriptionsSubscriptionIDResponse struct {
	ContentType  string
	StatusCode   int
	Subscription *shared.Subscription
}
