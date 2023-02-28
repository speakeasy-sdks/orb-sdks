package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostSubscriptionsSubscriptionIDUnschedulePendingCancellationPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type PostSubscriptionsSubscriptionIDUnschedulePendingCancellationRequest struct {
	PathParams PostSubscriptionsSubscriptionIDUnschedulePendingCancellationPathParams
}

type PostSubscriptionsSubscriptionIDUnschedulePendingCancellationResponse struct {
	ContentType  string
	StatusCode   int
	Subscription *shared.Subscription
}
