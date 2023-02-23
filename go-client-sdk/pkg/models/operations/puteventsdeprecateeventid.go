package operations

type PutEventsDeprecateEventIDPathParams struct {
	EventID string `pathParam:"style=simple,explode=false,name=event_id"`
}

type PutEventsDeprecateEventIDRequest struct {
	PathParams PutEventsDeprecateEventIDPathParams
}

type PutEventsDeprecateEventID400ApplicationJSON struct {
	Status           *int64   `json:"status,omitempty"`
	Title            *string  `json:"title,omitempty"`
	Type             *string  `json:"type,omitempty"`
	ValidationErrors []string `json:"validation_errors,omitempty"`
}

type PutEventsDeprecateEventID200ApplicationJSON struct {
	Deprecated *string `json:"deprecated,omitempty"`
}

type PutEventsDeprecateEventIDResponse struct {
	ContentType                                       string
	StatusCode                                        int
	PutEventsDeprecateEventID200ApplicationJSONObject *PutEventsDeprecateEventID200ApplicationJSON
	PutEventsDeprecateEventID400ApplicationJSONObject *PutEventsDeprecateEventID400ApplicationJSON
}
