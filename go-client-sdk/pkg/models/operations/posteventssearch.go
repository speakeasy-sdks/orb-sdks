package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostEventsSearchRequestBody struct {
	EventIds  []string `json:"event_ids,omitempty"`
	InvoiceID *string  `json:"invoice_id,omitempty"`
}

// PostEventsSearch200ApplicationJSON
// An array of events matching the specified search_criteria. If no events match, this array will be empty.
type PostEventsSearch200ApplicationJSON struct {
	Data               []shared.Event         `json:"data,omitempty"`
	PaginationMetadata map[string]interface{} `json:"pagination_metadata,omitempty"`
}

type PostEventsSearchRequest struct {
	Request *PostEventsSearchRequestBody `request:"mediaType=application/json"`
}

type PostEventsSearchResponse struct {
	ContentType                              string
	StatusCode                               int64
	PostEventsSearch200ApplicationJSONObject *PostEventsSearch200ApplicationJSON
}
