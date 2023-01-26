package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCrmEventRequestBody struct {
	AccessToken string              `json:"accessToken"`
	Event       *shared.EventCreate `json:"event,omitempty"`
}

type PostCrmEventResponseBody struct {
	ID string `json:"id"`
}

type PostCrmEventRequest struct {
	Request *PostCrmEventRequestBody `request:"mediaType=application/json"`
}

type PostCrmEventResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmEventResponseBody
}
