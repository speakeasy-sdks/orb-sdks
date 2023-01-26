package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetInvoiceInvoiceIDPathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoice_id"`
}

type GetInvoiceInvoiceIDRequest struct {
	PathParams GetInvoiceInvoiceIDPathParams
}

type GetInvoiceInvoiceIDResponse struct {
	ContentType string
	Invoice     *shared.Invoice
	StatusCode  int64
}
