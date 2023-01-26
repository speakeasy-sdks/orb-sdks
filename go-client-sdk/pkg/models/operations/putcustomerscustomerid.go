package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCustomersCustomerIDPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

// PutCustomersCustomerIDRequestBodyBillingAddress
// The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
type PutCustomersCustomerIDRequestBodyBillingAddress struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	Line1      *string `json:"line1,omitempty"`
	Line2      *string `json:"line2,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State      *string `json:"state,omitempty"`
}

type PutCustomersCustomerIDRequestBodyPaymentProviderEnum string

const (
	PutCustomersCustomerIDRequestBodyPaymentProviderEnumStripeInvoice PutCustomersCustomerIDRequestBodyPaymentProviderEnum = "stripe_invoice"
	PutCustomersCustomerIDRequestBodyPaymentProviderEnumQuickbooks    PutCustomersCustomerIDRequestBodyPaymentProviderEnum = "quickbooks"
	PutCustomersCustomerIDRequestBodyPaymentProviderEnumBillCom       PutCustomersCustomerIDRequestBodyPaymentProviderEnum = "bill.com"
	PutCustomersCustomerIDRequestBodyPaymentProviderEnumStripeCharge  PutCustomersCustomerIDRequestBodyPaymentProviderEnum = "stripe_charge"
)

// PutCustomersCustomerIDRequestBodyShippingAddress
// The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
type PutCustomersCustomerIDRequestBodyShippingAddress struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	Line1      *string `json:"line1,omitempty"`
	Line2      *string `json:"line2,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State      *string `json:"state,omitempty"`
}

// PutCustomersCustomerIDRequestBody
// The external payments or invoicing solution connected to this customer.
type PutCustomersCustomerIDRequestBody struct {
	AutoCollection    *bool                                                 `json:"auto_collection,omitempty"`
	BillingAddress    *PutCustomersCustomerIDRequestBodyBillingAddress      `json:"billing_address,omitempty"`
	Email             *string                                               `json:"email,omitempty"`
	Name              *string                                               `json:"name,omitempty"`
	PaymentProvider   *PutCustomersCustomerIDRequestBodyPaymentProviderEnum `json:"payment_provider,omitempty"`
	PaymentProviderID *string                                               `json:"payment_provider_id,omitempty"`
	ShippingAddress   *PutCustomersCustomerIDRequestBodyShippingAddress     `json:"shipping_address,omitempty"`
	TaxID             *shared.CustomerTaxID                                 `json:"tax_id,omitempty"`
}

type PutCustomersCustomerIDRequest struct {
	PathParams PutCustomersCustomerIDPathParams
	Request    *PutCustomersCustomerIDRequestBody `request:"mediaType=application/json"`
}

type PutCustomersCustomerIDResponse struct {
	ContentType string
	Customer    *shared.Customer
	StatusCode  int64
}
