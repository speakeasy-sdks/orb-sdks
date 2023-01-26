package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostSubscriptionsSubscriptionIDUnschedulePendingCancellationPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type PostSubscriptionsSubscriptionIDUnschedulePendingCancellationRequest struct {
	PathParams PostSubscriptionsSubscriptionIDUnschedulePendingCancellationPathParams
}

type PostSubscriptionsSubscriptionIDUnschedulePendingCancellationResponse struct {
	ContentType  string
	StatusCode   int64
	Subscription *shared.Subscription
}
