package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCrmDealRequestBody struct {
	AccessToken string            `json:"accessToken"`
	Deal        shared.DealCreate `json:"deal"`
}

type PostCrmDealResponseBody struct {
	ID string `json:"id"`
}

type PostCrmDealRequest struct {
	Request *PostCrmDealRequestBody `request:"mediaType=application/json"`
}

type PostCrmDealResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmDealResponseBody
}
