package operations

import (
	"time"
)

type PatchCustomersCustomerIDUsagePathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type PatchCustomersCustomerIDUsageQueryParams struct {
	TimeframeEnd   time.Time `queryParam:"style=form,explode=true,name=timeframe_end"`
	TimeframeStart time.Time `queryParam:"style=form,explode=true,name=timeframe_start"`
}

type PatchCustomersCustomerIDUsageRequestBodyEvents struct {
	EventName  string                 `json:"event_name"`
	Properties map[string]interface{} `json:"properties"`
	Timestamp  string                 `json:"timestamp"`
}

type PatchCustomersCustomerIDUsageRequestBody struct {
	Events []PatchCustomersCustomerIDUsageRequestBodyEvents `json:"events"`
}

type PatchCustomersCustomerIDUsage200ApplicationJSON struct {
	Duplicate []map[string]interface{} `json:"duplicate,omitempty"`
	Ingested  []string                 `json:"ingested,omitempty"`
}

type PatchCustomersCustomerIDUsage400ApplicationJSONValidationErrors struct {
	IdempotencyKey   *string  `json:"idempotency_key,omitempty"`
	ValidationErrors []string `json:"validation_errors,omitempty"`
}

type PatchCustomersCustomerIDUsage400ApplicationJSON struct {
	Status           int64                                                             `json:"status"`
	Title            string                                                            `json:"title"`
	Type             string                                                            `json:"type"`
	ValidationErrors []PatchCustomersCustomerIDUsage400ApplicationJSONValidationErrors `json:"validation_errors"`
}

type PatchCustomersCustomerIDUsageRequest struct {
	PathParams  PatchCustomersCustomerIDUsagePathParams
	QueryParams PatchCustomersCustomerIDUsageQueryParams
	Request     *PatchCustomersCustomerIDUsageRequestBody `request:"mediaType=application/json"`
}

type PatchCustomersCustomerIDUsageResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	PatchCustomersCustomerIDUsage200ApplicationJSONObject *PatchCustomersCustomerIDUsage200ApplicationJSON
	PatchCustomersCustomerIDUsage400ApplicationJSONObject *PatchCustomersCustomerIDUsage400ApplicationJSON
}
