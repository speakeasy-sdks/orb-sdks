package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmLeadQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmLeadResponseBody struct {
	InvalidIds []string      `json:"invalidIds,omitempty"`
	Leads      []shared.Lead `json:"leads,omitempty"`
}

type GetBatchCrmLeadRequest struct {
	QueryParams GetBatchCrmLeadQueryParams
}

type GetBatchCrmLeadResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmLeadResponseBody
}
