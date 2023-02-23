package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetPlans200ApplicationJSON struct {
	Data               []shared.Plan          `json:"data,omitempty"`
	PaginationMetadata map[string]interface{} `json:"pagination_metadata,omitempty"`
}

type GetPlansResponse struct {
	ContentType                      string
	StatusCode                       int
	GetPlans200ApplicationJSONObject *GetPlans200ApplicationJSON
}
