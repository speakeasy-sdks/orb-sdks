package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
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
	StatusCode  int64
}
