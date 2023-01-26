package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetDetailsCrmContactQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
}

type GetDetailsCrmContactResponseBody struct {
	Fields         []shared.Field `json:"fields,omitempty"`
	NextPageCursor *string        `json:"nextPageCursor,omitempty"`
}

type GetDetailsCrmContactRequest struct {
	QueryParams GetDetailsCrmContactQueryParams
}

type GetDetailsCrmContactResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetDetailsCrmContactResponseBody
}
