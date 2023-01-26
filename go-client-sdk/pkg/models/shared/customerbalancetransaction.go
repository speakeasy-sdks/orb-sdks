package shared

import (
	"time"
)

type CustomerBalanceTransactionActionEnum string

const (
	CustomerBalanceTransactionActionEnumAppliedToInvoice CustomerBalanceTransactionActionEnum = "applied_to_invoice"
	CustomerBalanceTransactionActionEnumProratedRefund   CustomerBalanceTransactionActionEnum = "prorated_refund"
	CustomerBalanceTransactionActionEnumManualAdjustment CustomerBalanceTransactionActionEnum = "manual_adjustment"
)

// CustomerBalanceTransactionInvoice
// The Invoice associated with this transaction
type CustomerBalanceTransactionInvoice struct {
	ID string `json:"id"`
}

// CustomerBalanceTransaction
// A single change to the customer balance. All amounts are in the customer's currency.
type CustomerBalanceTransaction struct {
	Action          CustomerBalanceTransactionActionEnum `json:"action"`
	Amount          string                               `json:"amount"`
	CreatedAt       time.Time                            `json:"created_at"`
	Description     string                               `json:"description"`
	EndingBalance   string                               `json:"ending_balance"`
	ID              string                               `json:"id"`
	Invoice         CustomerBalanceTransactionInvoice    `json:"invoice"`
	StartingBalance string                               `json:"starting_balance"`
}
