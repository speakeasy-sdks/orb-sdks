package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCrmLeadRequestBody struct {
	AccessToken *string            `json:"accessToken,omitempty"`
	Lead        *shared.LeadUpdate `json:"lead,omitempty"`
}

type PutCrmLeadResponseBody struct {
	ID string `json:"id"`
}

type PutCrmLeadRequest struct {
	Request *PutCrmLeadRequestBody `request:"mediaType=application/json"`
}

type PutCrmLeadResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PutCrmLeadResponseBody
}
