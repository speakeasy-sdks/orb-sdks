package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/types"
)

type PostCustomersCustomerIDCreditsLedgerEntryPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnum string

const (
	PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnumIncrement        PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnum = "increment"
	PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnumDecrement        PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnum = "decrement"
	PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnumExpirationChange PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnum = "expiration_change"
)

// PostCustomersCustomerIDCreditsLedgerEntryRequestBodyInvoiceSettings
// Passing `invoice_settings` automatically generates an invoice for the newly added credits. If `invoice_settings` is passed, you must specify `per_unit_cost_basis`, as the calculation of the invoice total is done on that basis.
type PostCustomersCustomerIDCreditsLedgerEntryRequestBodyInvoiceSettings struct {
	AutoCollection bool    `json:"auto_collection"`
	Memo           *string `json:"memo,omitempty"`
	NetTerms       float64 `json:"net_terms"`
}

type PostCustomersCustomerIDCreditsLedgerEntryRequestBody struct {
	Amount           float64                                                              `json:"amount"`
	BlockID          *string                                                              `json:"block_id,omitempty"`
	Description      *string                                                              `json:"description,omitempty"`
	EntryType        PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnum    `json:"entry_type"`
	ExpiryDate       *types.Date                                                          `json:"expiry_date,omitempty"`
	InvoiceSettings  *PostCustomersCustomerIDCreditsLedgerEntryRequestBodyInvoiceSettings `json:"invoice_settings,omitempty"`
	Metadata         map[string]interface{}                                               `json:"metadata,omitempty"`
	PerUnitCostBasis *string                                                              `json:"per_unit_cost_basis,omitempty"`
	TargetExpiryDate *types.Date                                                          `json:"target_expiry_date,omitempty"`
}

type PostCustomersCustomerIDCreditsLedgerEntryRequest struct {
	PathParams PostCustomersCustomerIDCreditsLedgerEntryPathParams
	Request    *PostCustomersCustomerIDCreditsLedgerEntryRequestBody `request:"mediaType=application/json"`
}

type PostCustomersCustomerIDCreditsLedgerEntryResponse struct {
	ContentType       string
	CreditLedgerEntry *shared.CreditLedgerEntry
	StatusCode        int
}
