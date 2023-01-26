package shared

import (
	"time"
)

// InvoiceAutoCollection
// Information about payment auto-collection for this invoice.
type InvoiceAutoCollection struct {
	NextAttemptAt         *time.Time `json:"next_attempt_at,omitempty"`
	PreviouslyAttemptedAt *time.Time `json:"previously_attempted_at,omitempty"`
}

// InvoiceCustomer
// The customer receiving this invoice.
type InvoiceCustomer struct {
	ExternalCustomerID string `json:"external_customer_id"`
	ID                 string `json:"id"`
}

// InvoiceLineItemsSubLineItemsGrouping
// For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` will be the values for this particular grouping.
type InvoiceLineItemsSubLineItemsGrouping struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// InvoiceLineItemsSubLineItemsMatrixConfig
// Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
type InvoiceLineItemsSubLineItemsMatrixConfig struct {
	DimensionValues []string `json:"dimension_values"`
}

// InvoiceLineItemsSubLineItemsTierConfig
// Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
type InvoiceLineItemsSubLineItemsTierConfig struct {
	FirstUnit  float64 `json:"first_unit"`
	LastUnit   float64 `json:"last_unit"`
	UnitAmount string  `json:"unit_amount"`
}

type InvoiceLineItemsSubLineItemsTypeEnum string

const (
	InvoiceLineItemsSubLineItemsTypeEnumMatrix InvoiceLineItemsSubLineItemsTypeEnum = "matrix"
	InvoiceLineItemsSubLineItemsTypeEnumTier   InvoiceLineItemsSubLineItemsTypeEnum = "tier"
)

type InvoiceLineItemsSubLineItems struct {
	Amount       string                                    `json:"amount"`
	Grouping     InvoiceLineItemsSubLineItemsGrouping      `json:"grouping"`
	MatrixConfig *InvoiceLineItemsSubLineItemsMatrixConfig `json:"matrix_config,omitempty"`
	Name         string                                    `json:"name"`
	Quantity     float64                                   `json:"quantity"`
	TierConfig   *InvoiceLineItemsSubLineItemsTierConfig   `json:"tier_config,omitempty"`
	Type         InvoiceLineItemsSubLineItemsTypeEnum      `json:"type"`
}

type InvoiceLineItemsTaxAmounts struct {
	Amount             string `json:"amount"`
	TaxRateDescription string `json:"tax_rate_description"`
	TaxRatePercentage  string `json:"tax_rate_percentage"`
}

type InvoiceLineItems struct {
	Amount       string                         `json:"amount"`
	Discount     map[string]interface{}         `json:"discount"`
	EndDate      time.Time                      `json:"end_date"`
	Grouping     string                         `json:"grouping"`
	ID           string                         `json:"id"`
	Minimum      map[string]interface{}         `json:"minimum"`
	Name         string                         `json:"name"`
	Price        Price                          `json:"price"`
	Quantity     float64                        `json:"quantity"`
	StartDate    time.Time                      `json:"start_date"`
	SubLineItems []InvoiceLineItemsSubLineItems `json:"sub_line_items"`
	Subtotal     string                         `json:"subtotal"`
	TaxAmounts   []InvoiceLineItemsTaxAmounts   `json:"tax_amounts"`
}

type InvoiceStatusEnum string

const (
	InvoiceStatusEnumIssued InvoiceStatusEnum = "issued"
	InvoiceStatusEnumPaid   InvoiceStatusEnum = "paid"
	InvoiceStatusEnumSynced InvoiceStatusEnum = "synced"
	InvoiceStatusEnumVoid   InvoiceStatusEnum = "void"
	InvoiceStatusEnumDraft  InvoiceStatusEnum = "draft"
)

// InvoiceSubscription
// The associated subscription for this invoice.
type InvoiceSubscription struct {
	ID string `json:"id"`
}

// Invoice
// An [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice) is a fundamental billing entity, representing the request for payment for a single subscription. This includes a set of line items, which correspond to prices in the subscription's plan and can represent fixed recurring fees or usage-based fees. They are generated at the end of a billing period, or as the result of an action, such as a cancellation.
type Invoice struct {
	AmountDue                   string                       `json:"amount_due"`
	AutoCollection              *InvoiceAutoCollection       `json:"auto_collection,omitempty"`
	CreatedAt                   time.Time                    `json:"created_at"`
	Currency                    string                       `json:"currency"`
	Customer                    InvoiceCustomer              `json:"customer"`
	CustomerBalanceTransactions []CustomerBalanceTransaction `json:"customer_balance_transactions"`
	CustomerTaxID               *CustomerTaxID               `json:"customer_tax_id,omitempty"`
	Discount                    map[string]interface{}       `json:"discount"`
	DueDate                     time.Time                    `json:"due_date"`
	HostedInvoiceURL            *string                      `json:"hosted_invoice_url,omitempty"`
	ID                          string                       `json:"id"`
	InvoiceDate                 time.Time                    `json:"invoice_date"`
	InvoicePdf                  string                       `json:"invoice_pdf"`
	IssuedAt                    *time.Time                   `json:"issued_at,omitempty"`
	LineItems                   []InvoiceLineItems           `json:"line_items"`
	Memo                        *string                      `json:"memo,omitempty"`
	Minimum                     map[string]interface{}       `json:"minimum"`
	PaidAt                      *time.Time                   `json:"paid_at,omitempty"`
	ScheduledIssueAt            *time.Time                   `json:"scheduled_issue_at,omitempty"`
	Status                      InvoiceStatusEnum            `json:"status"`
	Subscription                InvoiceSubscription          `json:"subscription"`
	Subtotal                    string                       `json:"subtotal"`
	Total                       string                       `json:"total"`
	VoidedAt                    *time.Time                   `json:"voided_at,omitempty"`
}
