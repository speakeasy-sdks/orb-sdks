package operations

import (
	"time"
)

type PatchExternalCustomersCustomerIDUsagePathParams struct {
	ExternalCustomerID string `pathParam:"style=simple,explode=false,name=external_customer_id"`
}

type PatchExternalCustomersCustomerIDUsageQueryParams struct {
	TimeframeEnd   time.Time `queryParam:"style=form,explode=true,name=timeframe_end"`
	TimeframeStart time.Time `queryParam:"style=form,explode=true,name=timeframe_start"`
}

type PatchExternalCustomersCustomerIDUsageRequestBodyEvents struct {
	EventName  string                 `json:"event_name"`
	Properties map[string]interface{} `json:"properties"`
	Timestamp  string                 `json:"timestamp"`
}

type PatchExternalCustomersCustomerIDUsageRequestBody struct {
	Events []PatchExternalCustomersCustomerIDUsageRequestBodyEvents `json:"events"`
}

type PatchExternalCustomersCustomerIDUsageRequest struct {
	PathParams  PatchExternalCustomersCustomerIDUsagePathParams
	QueryParams PatchExternalCustomersCustomerIDUsageQueryParams
	Request     *PatchExternalCustomersCustomerIDUsageRequestBody `request:"mediaType=application/json"`
}

type PatchExternalCustomersCustomerIDUsage400ApplicationJSONValidationErrors struct {
	IdempotencyKey   *string  `json:"idempotency_key,omitempty"`
	ValidationErrors []string `json:"validation_errors,omitempty"`
}

type PatchExternalCustomersCustomerIDUsage400ApplicationJSON struct {
	Status           int64                                                                     `json:"status"`
	Title            string                                                                    `json:"title"`
	Type             string                                                                    `json:"type"`
	ValidationErrors []PatchExternalCustomersCustomerIDUsage400ApplicationJSONValidationErrors `json:"validation_errors"`
}

type PatchExternalCustomersCustomerIDUsage200ApplicationJSON struct {
	Duplicate []map[string]interface{} `json:"duplicate,omitempty"`
	Ingested  []string                 `json:"ingested,omitempty"`
}

type PatchExternalCustomersCustomerIDUsageResponse struct {
	ContentType                                                   string
	StatusCode                                                    int
	PatchExternalCustomersCustomerIDUsage200ApplicationJSONObject *PatchExternalCustomersCustomerIDUsage200ApplicationJSON
	PatchExternalCustomersCustomerIDUsage400ApplicationJSONObject *PatchExternalCustomersCustomerIDUsage400ApplicationJSON
}
