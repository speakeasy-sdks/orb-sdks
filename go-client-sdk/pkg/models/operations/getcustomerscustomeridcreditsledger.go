package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCustomersCustomerIDCreditsLedgerPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type GetCustomersCustomerIDCreditsLedgerEntryStatusEnum string

const (
	GetCustomersCustomerIDCreditsLedgerEntryStatusEnumCommitted GetCustomersCustomerIDCreditsLedgerEntryStatusEnum = "committed"
	GetCustomersCustomerIDCreditsLedgerEntryStatusEnumPending   GetCustomersCustomerIDCreditsLedgerEntryStatusEnum = "pending"
)

type GetCustomersCustomerIDCreditsLedgerEntryTypeEnum string

const (
	GetCustomersCustomerIDCreditsLedgerEntryTypeEnumIncrement         GetCustomersCustomerIDCreditsLedgerEntryTypeEnum = "increment"
	GetCustomersCustomerIDCreditsLedgerEntryTypeEnumDecrement         GetCustomersCustomerIDCreditsLedgerEntryTypeEnum = "decrement"
	GetCustomersCustomerIDCreditsLedgerEntryTypeEnumExpirationChange  GetCustomersCustomerIDCreditsLedgerEntryTypeEnum = "expiration_change"
	GetCustomersCustomerIDCreditsLedgerEntryTypeEnumCreditBlockExpiry GetCustomersCustomerIDCreditsLedgerEntryTypeEnum = "credit_block_expiry"
)

type GetCustomersCustomerIDCreditsLedgerQueryParams struct {
	EntryStatus   *GetCustomersCustomerIDCreditsLedgerEntryStatusEnum `queryParam:"style=form,explode=true,name=entry_status"`
	EntryType     *GetCustomersCustomerIDCreditsLedgerEntryTypeEnum   `queryParam:"style=form,explode=true,name=entry_type"`
	MinimumAmount *float64                                            `queryParam:"style=form,explode=true,name=minimum_amount"`
}

type GetCustomersCustomerIDCreditsLedgerRequest struct {
	PathParams  GetCustomersCustomerIDCreditsLedgerPathParams
	QueryParams GetCustomersCustomerIDCreditsLedgerQueryParams
}

type GetCustomersCustomerIDCreditsLedger200ApplicationJSONPaginationMetadata struct {
	HasMore    bool   `json:"has_more"`
	NextCursor string `json:"next_cursor"`
}

type GetCustomersCustomerIDCreditsLedger200ApplicationJSON struct {
	Data               []shared.CreditLedgerEntry                                              `json:"data"`
	PaginationMetadata GetCustomersCustomerIDCreditsLedger200ApplicationJSONPaginationMetadata `json:"pagination_metadata"`
}

type GetCustomersCustomerIDCreditsLedgerResponse struct {
	ContentType                                                 string
	StatusCode                                                  int
	GetCustomersCustomerIDCreditsLedger200ApplicationJSONObject *GetCustomersCustomerIDCreditsLedger200ApplicationJSON
}
