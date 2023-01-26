package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneCrmLeadQueryParams struct {
	AccessToken string `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool  `queryParam:"style=form,explode=true,name=allFields"`
	ID          string `queryParam:"style=form,explode=true,name=id"`
}

type GetOneCrmLeadResponseBody struct {
	Lead *shared.Lead `json:"lead,omitempty"`
}

type GetOneCrmLeadRequest struct {
	QueryParams GetOneCrmLeadQueryParams
}

type GetOneCrmLeadResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneCrmLeadResponseBody
}
