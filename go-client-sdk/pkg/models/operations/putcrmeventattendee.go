package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCrmEventAttendeeResponseBody struct {
	AccessToken   *string                     `json:"accessToken,omitempty"`
	EventAttendee *shared.EventAttendeeUpdate `json:"eventAttendee,omitempty"`
}

type PutCrmEventAttendeeResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PutCrmEventAttendeeResponseBody
}
