package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostSubscriptionsSubscriptionIDUnschedulePendingPlanChangesPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type PostSubscriptionsSubscriptionIDUnschedulePendingPlanChangesRequest struct {
	PathParams PostSubscriptionsSubscriptionIDUnschedulePendingPlanChangesPathParams
}

type PostSubscriptionsSubscriptionIDUnschedulePendingPlanChangesResponse struct {
	ContentType  string
	StatusCode   int
	Subscription *shared.Subscription
}
