package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCrmAccountRequestBody struct {
	AccessToken string               `json:"accessToken"`
	Account     shared.AccountCreate `json:"account"`
}

type PostCrmAccountResponseBody struct {
	ID *string `json:"id,omitempty"`
}

type PostCrmAccountRequest struct {
	Request *PostCrmAccountRequestBody `request:"mediaType=application/json"`
}

type PostCrmAccountResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmAccountResponseBody
}
