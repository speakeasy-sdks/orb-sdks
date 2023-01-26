package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCrmDealRequestBody struct {
	AccessToken string            `json:"accessToken"`
	Deal        shared.DealUpdate `json:"deal"`
	ID          string            `json:"id"`
}

type PutCrmDealResponseBody struct {
	ID string `json:"id"`
}

type PutCrmDealRequest struct {
	Request *PutCrmDealRequestBody `request:"mediaType=application/json"`
}

type PutCrmDealResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PutCrmDealResponseBody
}
