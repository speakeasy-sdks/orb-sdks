package operations

import (
	"time"
)

type PutEventsEventIDPathParams struct {
	EventID string `pathParam:"style=simple,explode=false,name=event_id"`
}

type PutEventsEventIDRequestBody struct {
	CustomerID         *string                `json:"customer_id,omitempty"`
	EventName          string                 `json:"event_name"`
	ExternalCustomerID *string                `json:"external_customer_id,omitempty"`
	Properties         map[string]interface{} `json:"properties"`
	Timestamp          time.Time              `json:"timestamp"`
}

type PutEventsEventIDRequest struct {
	PathParams PutEventsEventIDPathParams
	Request    *PutEventsEventIDRequestBody `request:"mediaType=application/json"`
}

type PutEventsEventID400ApplicationJSON struct {
	Status           *int64   `json:"status,omitempty"`
	Title            *string  `json:"title,omitempty"`
	Type             *string  `json:"type,omitempty"`
	ValidationErrors []string `json:"validation_errors,omitempty"`
}

type PutEventsEventID200ApplicationJSON struct {
	Amended *string `json:"amended,omitempty"`
}

type PutEventsEventIDResponse struct {
	ContentType                              string
	StatusCode                               int
	PutEventsEventID200ApplicationJSONObject *PutEventsEventID200ApplicationJSON
	PutEventsEventID400ApplicationJSONObject *PutEventsEventID400ApplicationJSON
}
