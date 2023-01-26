package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneCrmEventAttendeeQueryParams struct {
	AccessToken string `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool  `queryParam:"style=form,explode=true,name=allFields"`
	ID          string `queryParam:"style=form,explode=true,name=id"`
}

type GetOneCrmEventAttendeeResponseBody struct {
	EventAttendee *shared.EventAttendee `json:"eventAttendee,omitempty"`
}

type GetOneCrmEventAttendeeRequest struct {
	QueryParams GetOneCrmEventAttendeeQueryParams
}

type GetOneCrmEventAttendeeResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneCrmEventAttendeeResponseBody
}
