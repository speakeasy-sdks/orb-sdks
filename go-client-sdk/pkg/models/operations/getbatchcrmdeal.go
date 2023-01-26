package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmDealQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmDealResponseBody struct {
	Deals      []shared.Deal `json:"deals,omitempty"`
	InvalidIds []string      `json:"invalidIds,omitempty"`
}

type GetBatchCrmDealRequest struct {
	QueryParams GetBatchCrmDealQueryParams
}

type GetBatchCrmDealResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmDealResponseBody
}
