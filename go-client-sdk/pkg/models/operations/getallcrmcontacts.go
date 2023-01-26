package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmContactsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmContactsResponseBody struct {
	Contacts       []shared.Contact `json:"contacts,omitempty"`
	NextPageCursor *string          `json:"nextPageCursor,omitempty"`
}

type GetAllCrmContactsRequest struct {
	QueryParams GetAllCrmContactsQueryParams
}

type GetAllCrmContactsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmContactsResponseBody
}
