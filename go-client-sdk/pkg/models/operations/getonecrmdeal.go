package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneCrmDealQueryParams struct {
	AccessToken string `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool  `queryParam:"style=form,explode=true,name=allFields"`
	ID          string `queryParam:"style=form,explode=true,name=id"`
}

type GetOneCrmDealResponseBody struct {
	Deal *shared.Deal `json:"deal,omitempty"`
}

type GetOneCrmDealRequest struct {
	QueryParams GetOneCrmDealQueryParams
}

type GetOneCrmDealResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneCrmDealResponseBody
}
