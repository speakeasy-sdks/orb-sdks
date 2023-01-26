package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmEventAttendeesQueryParams struct {
	AccessToken *string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmEventAttendeesResponseBody struct {
	EventAttendees []shared.EventAttendee `json:"eventAttendees,omitempty"`
	NextPageCursor *string                `json:"nextPageCursor,omitempty"`
}

type GetAllCrmEventAttendeesRequest struct {
	QueryParams GetAllCrmEventAttendeesQueryParams
}

type GetAllCrmEventAttendeesResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmEventAttendeesResponseBody
}
