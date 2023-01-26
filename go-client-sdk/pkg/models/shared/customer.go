package shared

import (
	"time"
)

// CustomerBillingAddress
// The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
type CustomerBillingAddress struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	Line1      *string `json:"line1,omitempty"`
	Line2      *string `json:"line2,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State      *string `json:"state,omitempty"`
}

type CustomerPaymentProviderEnum string

const (
	CustomerPaymentProviderEnumStripe        CustomerPaymentProviderEnum = "stripe"
	CustomerPaymentProviderEnumQuickbooks    CustomerPaymentProviderEnum = "quickbooks"
	CustomerPaymentProviderEnumBillCom       CustomerPaymentProviderEnum = "bill.com"
	CustomerPaymentProviderEnumStripeCharge  CustomerPaymentProviderEnum = "stripe_charge"
	CustomerPaymentProviderEnumStripeInvoice CustomerPaymentProviderEnum = "stripe_invoice"
)

// CustomerShippingAddress
// The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
type CustomerShippingAddress struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	Line1      *string `json:"line1,omitempty"`
	Line2      *string `json:"line2,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State      *string `json:"state,omitempty"`
}

// Customer
// A customer is a buyer of your products, and the other party to the billing relationship.
//
// In Orb, customers are assigned system generated identifiers automatically, but it's often desirable to have these match existing identifiers in your system. To avoid having to denormalize Orb ID information, you can pass in an `external_customer_id` with your own identifier. See [Customer ID Aliases](../docs/Customer-ID-Aliases.md) for further information about how these aliases work in Orb.
//
// In addition to having an identifier in your system, a customer may exist in a payment provider solution like Stripe. Use the `payment_provider_id` and the `payment_provider` enum field to express this mapping.
//
// A customer also has a timezone (from the standard [IANA timezone database](https://www.iana.org/time-zones)), which defaults to your account's timezone. See [Timezone localization](../docs/Timezone-localization.md) for information on what this timezone parameter influences within Orb.
type Customer struct {
	AutoCollection     *bool                       `json:"auto_collection,omitempty"`
	Balance            string                      `json:"balance"`
	BillingAddress     *CustomerBillingAddress     `json:"billing_address,omitempty"`
	CreatedAt          time.Time                   `json:"created_at"`
	Currency           string                      `json:"currency"`
	Email              string                      `json:"email"`
	ExternalCustomerID *string                     `json:"external_customer_id,omitempty"`
	ID                 string                      `json:"id"`
	Name               string                      `json:"name"`
	PaymentProvider    CustomerPaymentProviderEnum `json:"payment_provider"`
	PaymentProviderID  string                      `json:"payment_provider_id"`
	ShippingAddress    *CustomerShippingAddress    `json:"shipping_address,omitempty"`
	TaxID              CustomerTaxID               `json:"tax_id"`
	Timezone           string                      `json:"timezone"`
}
