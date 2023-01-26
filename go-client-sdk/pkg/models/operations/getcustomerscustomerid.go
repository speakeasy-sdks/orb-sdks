package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetCustomersCustomerIDPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type GetCustomersCustomerIDRequest struct {
	PathParams GetCustomersCustomerIDPathParams
}

type GetCustomersCustomerIDResponse struct {
	ContentType string
	Customer    *shared.Customer
	StatusCode  int64
}
