package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetInvoicesUpcomingQueryParams struct {
	SubscriptionID string `queryParam:"style=form,explode=true,name=subscription_id"`
}

type GetInvoicesUpcomingRequest struct {
	QueryParams GetInvoicesUpcomingQueryParams
}

type GetInvoicesUpcomingResponse struct {
	ContentType              string
	StatusCode               int
	UpcomingPercent20Invoice *shared.UpcomingPercent20Invoice
}
