package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetSubscriptionsQueryParams struct {
	CustomerID         *string `queryParam:"style=form,explode=true,name=customer_id"`
	ExternalCustomerID *string `queryParam:"style=form,explode=true,name=external_customer_id"`
}

type GetSubscriptionsRequest struct {
	QueryParams GetSubscriptionsQueryParams
}

type GetSubscriptions200ApplicationJSON struct {
	Data               []shared.Subscription  `json:"data,omitempty"`
	PaginationMetadata map[string]interface{} `json:"pagination_metadata,omitempty"`
}

type GetSubscriptionsResponse struct {
	ContentType                              string
	StatusCode                               int
	GetSubscriptions200ApplicationJSONObject *GetSubscriptions200ApplicationJSON
}
