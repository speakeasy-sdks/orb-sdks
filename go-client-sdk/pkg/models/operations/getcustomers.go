package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCustomers200ApplicationJSONPaginationMetadata struct {
	HasMore    bool   `json:"has_more"`
	NextCursor string `json:"next_cursor"`
}

type GetCustomers200ApplicationJSON struct {
	Data               []shared.Customer                                `json:"data"`
	PaginationMetadata GetCustomers200ApplicationJSONPaginationMetadata `json:"pagination_metadata"`
}

type GetCustomersResponse struct {
	ContentType                          string
	StatusCode                           int
	GetCustomers200ApplicationJSONObject *GetCustomers200ApplicationJSON
}
