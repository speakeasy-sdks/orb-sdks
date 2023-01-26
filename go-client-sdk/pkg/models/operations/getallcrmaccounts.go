package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmAccountsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmAccountsResponseBody struct {
	Accounts       []shared.Account `json:"accounts,omitempty"`
	NextPageCursor *string          `json:"nextPageCursor,omitempty"`
}

type GetAllCrmAccountsRequest struct {
	QueryParams GetAllCrmAccountsQueryParams
}

type GetAllCrmAccountsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmAccountsResponseBody
}
