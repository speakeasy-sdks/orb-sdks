package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmEventAttendeeQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmEventAttendeeResponseBody struct {
	EventAttendees []shared.EventAttendee `json:"eventAttendees,omitempty"`
	InvalidIds     []string               `json:"invalidIds,omitempty"`
}

type GetBatchCrmEventAttendeeRequest struct {
	QueryParams GetBatchCrmEventAttendeeQueryParams
}

type GetBatchCrmEventAttendeeResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmEventAttendeeResponseBody
}
