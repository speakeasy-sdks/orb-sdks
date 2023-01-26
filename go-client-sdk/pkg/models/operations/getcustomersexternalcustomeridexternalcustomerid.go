package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetCustomersExternalCustomerIDExternalCustomerIDPathParams struct {
	ExternalCustomerID string `pathParam:"style=simple,explode=false,name=external_customer_id"`
}

type GetCustomersExternalCustomerIDExternalCustomerIDRequest struct {
	PathParams GetCustomersExternalCustomerIDExternalCustomerIDPathParams
}

type GetCustomersExternalCustomerIDExternalCustomerIDResponse struct {
	ContentType string
	Customer    *shared.Customer
	StatusCode  int64
}
