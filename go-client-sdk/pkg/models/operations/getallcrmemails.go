package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmEmailsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmEmailsResponseBody struct {
	Emails         []shared.Email `json:"emails,omitempty"`
	NextPageCursor *string        `json:"nextPageCursor,omitempty"`
}

type GetAllCrmEmailsRequest struct {
	QueryParams GetAllCrmEmailsQueryParams
}

type GetAllCrmEmailsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmEmailsResponseBody
}
