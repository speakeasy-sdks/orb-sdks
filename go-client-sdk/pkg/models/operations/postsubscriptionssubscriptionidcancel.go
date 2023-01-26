package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type PostSubscriptionsSubscriptionIDCancelPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnum string

const (
	PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnumImmediate             PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnum = "immediate"
	PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnumEndOfSubscriptionTerm PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnum = "end_of_subscription_term"
	PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnumRequestedDate         PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnum = "requested_date"
)

type PostSubscriptionsSubscriptionIDCancelRequestBody struct {
	CancelOption     PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnum `json:"cancel_option"`
	CancellationDate *time.Time                                                       `json:"cancellation_date,omitempty"`
}

type PostSubscriptionsSubscriptionIDCancelRequest struct {
	PathParams PostSubscriptionsSubscriptionIDCancelPathParams
	Request    *PostSubscriptionsSubscriptionIDCancelRequestBody `request:"mediaType=application/json"`
}

type PostSubscriptionsSubscriptionIDCancelResponse struct {
	ContentType  string
	StatusCode   int64
	Subscription *shared.Subscription
}
