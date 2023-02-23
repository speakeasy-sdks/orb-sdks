package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostInvoicesInvoiceIDVoidPathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoice_id"`
}

type PostInvoicesInvoiceIDVoidRequest struct {
	PathParams PostInvoicesInvoiceIDVoidPathParams
}

type PostInvoicesInvoiceIDVoidResponse struct {
	ContentType string
	Invoice     *shared.Invoice
	StatusCode  int
}
