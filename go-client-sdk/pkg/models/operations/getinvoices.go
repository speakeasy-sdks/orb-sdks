package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetInvoicesQueryParams struct {
	CustomerID         *string `queryParam:"style=form,explode=true,name=customer_id"`
	ExternalCustomerID *string `queryParam:"style=form,explode=true,name=external_customer_id"`
	SubscriptionID     *string `queryParam:"style=form,explode=true,name=subscription_id"`
}

type GetInvoicesRequest struct {
	QueryParams GetInvoicesQueryParams
}

type GetInvoices200ApplicationJSON struct {
	Data               []shared.Invoice       `json:"data,omitempty"`
	PaginationMetadata map[string]interface{} `json:"pagination_metadata,omitempty"`
}

type GetInvoicesResponse struct {
	ContentType                         string
	StatusCode                          int
	GetInvoices200ApplicationJSONObject *GetInvoices200ApplicationJSON
}
