package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneCrmAccountQueryParams struct {
	AccessToken string `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool  `queryParam:"style=form,explode=true,name=allFields"`
	ID          string `queryParam:"style=form,explode=true,name=id"`
}

type GetOneCrmAccountResponseBody struct {
	Account *shared.Account `json:"account,omitempty"`
}

type GetOneCrmAccountRequest struct {
	QueryParams GetOneCrmAccountQueryParams
}

type GetOneCrmAccountResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneCrmAccountResponseBody
}
