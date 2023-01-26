package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCrmEventRequestBody struct {
	AccessToken string              `json:"accessToken"`
	Event       *shared.EventUpdate `json:"event,omitempty"`
	ID          string              `json:"id"`
}

type PutCrmEventResponseBody struct {
	ID string `json:"id"`
}

type PutCrmEventRequest struct {
	Request *PutCrmEventRequestBody `request:"mediaType=application/json"`
}

type PutCrmEventResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PutCrmEventResponseBody
}
