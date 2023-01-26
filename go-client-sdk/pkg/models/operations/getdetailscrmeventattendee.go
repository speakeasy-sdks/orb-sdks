package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetDetailsCrmEventAttendeeQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
}

type GetDetailsCrmEventAttendeeResponseBody struct {
	Fields         []shared.Field `json:"fields,omitempty"`
	NextPageCursor *string        `json:"nextPageCursor,omitempty"`
}

type GetDetailsCrmEventAttendeeRequest struct {
	QueryParams GetDetailsCrmEventAttendeeQueryParams
}

type GetDetailsCrmEventAttendeeResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetDetailsCrmEventAttendeeResponseBody
}
