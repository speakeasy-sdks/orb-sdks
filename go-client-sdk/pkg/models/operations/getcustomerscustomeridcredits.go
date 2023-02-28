package operations

import (
	"time"
)

type GetCustomersCustomerIDCreditsPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type GetCustomersCustomerIDCreditsRequest struct {
	PathParams GetCustomersCustomerIDCreditsPathParams
}

type GetCustomersCustomerIDCredits200ApplicationJSONData struct {
	Balance          float64   `json:"balance"`
	ExpiryDate       time.Time `json:"expiry_date"`
	ID               string    `json:"id"`
	PerUnitCostBasis string    `json:"per_unit_cost_basis"`
}

type GetCustomersCustomerIDCredits200ApplicationJSONPaginationMetadata struct {
	HasMore    bool    `json:"has_more"`
	NextCursor *string `json:"next_cursor,omitempty"`
}

type GetCustomersCustomerIDCredits200ApplicationJSON struct {
	Data               []GetCustomersCustomerIDCredits200ApplicationJSONData             `json:"data"`
	PaginationMetadata GetCustomersCustomerIDCredits200ApplicationJSONPaginationMetadata `json:"pagination_metadata"`
}

type GetCustomersCustomerIDCreditsResponse struct {
	ContentType                                           string
	StatusCode                                            int
	GetCustomersCustomerIDCredits200ApplicationJSONObject *GetCustomersCustomerIDCredits200ApplicationJSON
}
