package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmIntegrationsResponseBody struct {
	Integrations []shared.Integration `json:"integrations,omitempty"`
}

type GetAllCrmIntegrationsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmIntegrationsResponseBody
}
