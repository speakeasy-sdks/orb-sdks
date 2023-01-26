package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCrmAccountRequestBody struct {
	AccessToken string               `json:"accessToken"`
	Account     shared.AccountUpdate `json:"account"`
	ID          string               `json:"id"`
}

type PutCrmAccountResponseBody struct {
	ID string `json:"id"`
}

type PutCrmAccountRequest struct {
	Request *PutCrmAccountRequestBody `request:"mediaType=application/json"`
}

type PutCrmAccountResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PutCrmAccountResponseBody
}
