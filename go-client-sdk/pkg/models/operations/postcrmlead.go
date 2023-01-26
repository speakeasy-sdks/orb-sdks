package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCrmLeadRequestBody struct {
	AccessToken string            `json:"accessToken"`
	Lead        shared.LeadCreate `json:"lead"`
}

type PostCrmLeadResponseBody struct {
	ID string `json:"id"`
}

type PostCrmLeadRequest struct {
	Request *PostCrmLeadRequestBody `request:"mediaType=application/json"`
}

type PostCrmLeadResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmLeadResponseBody
}
