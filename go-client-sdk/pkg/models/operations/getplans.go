package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetPlans200ApplicationJSON struct {
	Data               []shared.Plan          `json:"data,omitempty"`
	PaginationMetadata map[string]interface{} `json:"pagination_metadata,omitempty"`
}

type GetPlansResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetPlans200ApplicationJSONObject *GetPlans200ApplicationJSON
}
