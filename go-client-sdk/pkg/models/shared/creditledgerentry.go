package shared

import (
	"time"
)

// CreditLedgerEntryCreditBlock
// Credit block that the entry affected
type CreditLedgerEntryCreditBlock struct {
	ExpiryDate       string `json:"expiry_date"`
	ID               string `json:"id"`
	PerUnitCostBasis string `json:"per_unit_cost_basis"`
}

type CreditLedgerEntryCustomer struct {
	ExternalCustomerID string `json:"external_customer_id"`
	ID                 string `json:"id"`
}

type CreditLedgerEntryEntryStatusEnum string

const (
	CreditLedgerEntryEntryStatusEnumCommitted CreditLedgerEntryEntryStatusEnum = "committed"
	CreditLedgerEntryEntryStatusEnumPending   CreditLedgerEntryEntryStatusEnum = "pending"
)

type CreditLedgerEntryEntryTypeEnum string

const (
	CreditLedgerEntryEntryTypeEnumIncrement         CreditLedgerEntryEntryTypeEnum = "increment"
	CreditLedgerEntryEntryTypeEnumDecrement         CreditLedgerEntryEntryTypeEnum = "decrement"
	CreditLedgerEntryEntryTypeEnumExpirationChange  CreditLedgerEntryEntryTypeEnum = "expiration_change"
	CreditLedgerEntryEntryTypeEnumCreditBlockExpiry CreditLedgerEntryEntryTypeEnum = "credit_block_expiry"
)

// CreditLedgerEntry
// A credit ledger entry is a single entry in the customer balance ledger. More details about working with real-time balances are [here](../docs/Pre-paid-plans.md).
//
// To support late and out-of-order event reporting, ledger entries are marked as either __committed_ or _pending_. Committed entries are finalized and will not change. Pending entries can be updated up until the event reporting grace period.
type CreditLedgerEntry struct {
	Amount               float64                          `json:"amount"`
	CreatedAt            time.Time                        `json:"created_at"`
	CreditBlock          CreditLedgerEntryCreditBlock     `json:"credit_block"`
	Customer             CreditLedgerEntryCustomer        `json:"customer"`
	Description          string                           `json:"description"`
	EndingBalance        float64                          `json:"ending_balance"`
	EntryStatus          CreditLedgerEntryEntryStatusEnum `json:"entry_status"`
	EntryType            CreditLedgerEntryEntryTypeEnum   `json:"entry_type"`
	EventID              *string                          `json:"event_id,omitempty"`
	ID                   string                           `json:"id"`
	LedgerSequenceNumber float64                          `json:"ledger_sequence_number"`
	Metadata             map[string]interface{}           `json:"metadata"`
	PriceID              *string                          `json:"price_id,omitempty"`
	StartingBalance      float64                          `json:"starting_balance"`
}
