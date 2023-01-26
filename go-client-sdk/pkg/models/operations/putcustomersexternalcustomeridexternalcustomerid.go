package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCustomersExternalCustomerIDExternalCustomerIDPathParams struct {
	ExternalCustomerID string `pathParam:"style=simple,explode=false,name=external_customer_id"`
}

// PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyBillingAddress
// The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
type PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyBillingAddress struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	Line1      *string `json:"line1,omitempty"`
	Line2      *string `json:"line2,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State      *string `json:"state,omitempty"`
}

type PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum string

const (
	PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnumQuickbooks    PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum = "quickbooks"
	PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnumStripeCharge  PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum = "stripe_charge"
	PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnumStripeInvoice PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum = "stripe_invoice"
	PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnumBillCom       PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum = "bill.com"
)

// PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyShippingAddress
// The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
type PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyShippingAddress struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	Line1      *string `json:"line1,omitempty"`
	Line2      *string `json:"line2,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State      *string `json:"state,omitempty"`
}

type PutCustomersExternalCustomerIDExternalCustomerIDRequestBody struct {
	BillingAddress    *PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyBillingAddress      `json:"billing_address,omitempty"`
	Email             *string                                                                         `json:"email,omitempty"`
	Name              *string                                                                         `json:"name,omitempty"`
	PaymentProvider   *PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum `json:"payment_provider,omitempty"`
	PaymentProviderID *string                                                                         `json:"payment_provider_id,omitempty"`
	ShippingAddress   *PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyShippingAddress     `json:"shipping_address,omitempty"`
}

type PutCustomersExternalCustomerIDExternalCustomerIDRequest struct {
	PathParams PutCustomersExternalCustomerIDExternalCustomerIDPathParams
	Request    *PutCustomersExternalCustomerIDExternalCustomerIDRequestBody `request:"mediaType=application/json"`
}

type PutCustomersExternalCustomerIDExternalCustomerIDResponse struct {
	ContentType string
	Customer    *shared.Customer
	StatusCode  int64
}
