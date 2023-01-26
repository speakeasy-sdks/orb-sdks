package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCrmEventAttendeeResponseBody struct {
	AccessToken   *string                     `json:"accessToken,omitempty"`
	EventAttendee *shared.EventAttendeeCreate `json:"eventAttendee,omitempty"`
}

type PostCrmEventAttendeeResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmEventAttendeeResponseBody
}
