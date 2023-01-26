package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetCustomersCustomerIDBalanceTransactionsPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type GetCustomersCustomerIDBalanceTransactions200ApplicationJSON struct {
	Data               []shared.CustomerBalanceTransaction `json:"data,omitempty"`
	PaginationMetadata map[string]interface{}              `json:"pagination_metadata,omitempty"`
}

type GetCustomersCustomerIDBalanceTransactionsRequest struct {
	PathParams GetCustomersCustomerIDBalanceTransactionsPathParams
}

type GetCustomersCustomerIDBalanceTransactionsResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	GetCustomersCustomerIDBalanceTransactions200ApplicationJSONObject *GetCustomersCustomerIDBalanceTransactions200ApplicationJSON
}
