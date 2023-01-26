package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

// PostCustomersRequestBodyBillingAddress
// The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
type PostCustomersRequestBodyBillingAddress struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	Line1      *string `json:"line1,omitempty"`
	Line2      *string `json:"line2,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State      *string `json:"state,omitempty"`
}

type PostCustomersRequestBodyPaymentProviderEnum string

const (
	PostCustomersRequestBodyPaymentProviderEnumQuickbooks    PostCustomersRequestBodyPaymentProviderEnum = "quickbooks"
	PostCustomersRequestBodyPaymentProviderEnumBillCom       PostCustomersRequestBodyPaymentProviderEnum = "bill.com"
	PostCustomersRequestBodyPaymentProviderEnumStripeCharge  PostCustomersRequestBodyPaymentProviderEnum = "stripe_charge"
	PostCustomersRequestBodyPaymentProviderEnumStripeInvoice PostCustomersRequestBodyPaymentProviderEnum = "stripe_invoice"
)

// PostCustomersRequestBodyShippingAddress
// The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
type PostCustomersRequestBodyShippingAddress struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	Line1      *string `json:"line1,omitempty"`
	Line2      *string `json:"line2,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State      *string `json:"state,omitempty"`
}

type PostCustomersRequestBody struct {
	AutoCollection     *bool                                        `json:"auto_collection,omitempty"`
	BillingAddress     *PostCustomersRequestBodyBillingAddress      `json:"billing_address,omitempty"`
	Currency           *string                                      `json:"currency,omitempty"`
	Email              string                                       `json:"email"`
	ExternalCustomerID *string                                      `json:"external_customer_id,omitempty"`
	Name               string                                       `json:"name"`
	PaymentProvider    *PostCustomersRequestBodyPaymentProviderEnum `json:"payment_provider,omitempty"`
	PaymentProviderID  *string                                      `json:"payment_provider_id,omitempty"`
	ShippingAddress    *PostCustomersRequestBodyShippingAddress     `json:"shipping_address,omitempty"`
	TaxID              *shared.CustomerTaxID                        `json:"tax_id,omitempty"`
	Timezone           *string                                      `json:"timezone,omitempty"`
}

type PostCustomersRequest struct {
	Request *PostCustomersRequestBody `request:"mediaType=application/json"`
}

type PostCustomersResponse struct {
	ContentType string
	Customer    *shared.Customer
	StatusCode  int64
}
