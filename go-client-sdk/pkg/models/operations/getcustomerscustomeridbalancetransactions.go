package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCustomersCustomerIDBalanceTransactionsPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type GetCustomersCustomerIDBalanceTransactionsRequest struct {
	PathParams GetCustomersCustomerIDBalanceTransactionsPathParams
}

type GetCustomersCustomerIDBalanceTransactions200ApplicationJSON struct {
	Data               []shared.CustomerBalanceTransaction `json:"data,omitempty"`
	PaginationMetadata map[string]interface{}              `json:"pagination_metadata,omitempty"`
}

type GetCustomersCustomerIDBalanceTransactionsResponse struct {
	ContentType                                                       string
	StatusCode                                                        int
	GetCustomersCustomerIDBalanceTransactions200ApplicationJSONObject *GetCustomersCustomerIDBalanceTransactions200ApplicationJSON
}
