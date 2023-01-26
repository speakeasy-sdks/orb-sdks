package shared

import (
	"time"
)

// UpcomingPercent20InvoiceCustomer
// The customer receiving this invoice.
type UpcomingPercent20InvoiceCustomer struct {
	ExternalCustomerID string `json:"external_customer_id"`
	ID                 string `json:"id"`
}

// UpcomingPercent20InvoiceLineItemsGrouping
// For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` and `subtotal` will be the values for this particular grouping.
type UpcomingPercent20InvoiceLineItemsGrouping struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}

// UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig
// Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
type UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig struct {
	DimensionValues []string `json:"dimension_values"`
}

// UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig
// Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
type UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig struct {
	FirstUnit  float64 `json:"first_unit"`
	LastUnit   float64 `json:"last_unit"`
	UnitAmount string  `json:"unit_amount"`
}

type UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum string

const (
	UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnumMatrix UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum = "matrix"
	UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnumTier   UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum = "tier"
)

type UpcomingPercent20InvoiceLineItemsSubLineItems struct {
	Amount       string                                                     `json:"amount"`
	MatrixConfig *UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig `json:"matrix_config,omitempty"`
	Name         string                                                     `json:"name"`
	Quantity     float64                                                    `json:"quantity"`
	TierConfig   *UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig   `json:"tier_config,omitempty"`
	Type         UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum      `json:"type"`
}

type UpcomingPercent20InvoiceLineItems struct {
	Amount       string                                          `json:"amount"`
	EndDate      time.Time                                       `json:"end_date"`
	Grouping     UpcomingPercent20InvoiceLineItemsGrouping       `json:"grouping"`
	Name         string                                          `json:"name"`
	Quantity     float64                                         `json:"quantity"`
	StartDate    time.Time                                       `json:"start_date"`
	SubLineItems []UpcomingPercent20InvoiceLineItemsSubLineItems `json:"sub_line_items"`
	Subtotal     string                                          `json:"subtotal"`
}

// UpcomingPercent20InvoiceSubscription
// The associated subscription for this invoice.
type UpcomingPercent20InvoiceSubscription struct {
	ID string `json:"id"`
}

// UpcomingPercent20Invoice
// Upcoming invoices contain a line-by-line breakdown of an upcoming amount due for a subscription, including incurred usage in the billing period as well as any recurring fees.
//
// Although each line item will be invoiced on the `target_date`, each invoice line item may have distinct date ranges (e.g. for usage billed in arrears, the range may specify the current month whereas an in-advance recurring fees will be for the following month).
//
// Since an invoice resource has not been created for this upcoming invoice, this endpoint intentionally does not return an `id` field.
type UpcomingPercent20Invoice struct {
	AmountDue        string                               `json:"amount_due"`
	Currency         string                               `json:"currency"`
	Customer         UpcomingPercent20InvoiceCustomer     `json:"customer"`
	HostedInvoiceURL string                               `json:"hosted_invoice_url"`
	LineItems        []UpcomingPercent20InvoiceLineItems  `json:"line_items"`
	Subscription     UpcomingPercent20InvoiceSubscription `json:"subscription"`
	Subtotal         string                               `json:"subtotal"`
	TargetDate       time.Time                            `json:"target_date"`
}
