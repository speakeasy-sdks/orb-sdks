package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmUsersQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmUsersResponseBody struct {
	NextPageCursor *string       `json:"nextPageCursor,omitempty"`
	Users          []shared.User `json:"users,omitempty"`
}

type GetAllCrmUsersRequest struct {
	QueryParams GetAllCrmUsersQueryParams
}

type GetAllCrmUsersResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmUsersResponseBody
}
