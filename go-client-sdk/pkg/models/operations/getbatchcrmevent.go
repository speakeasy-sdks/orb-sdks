package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmEventQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmEventResponseBody struct {
	Events     []shared.Event `json:"events,omitempty"`
	InvalidIds []string       `json:"invalidIds,omitempty"`
}

type GetBatchCrmEventRequest struct {
	QueryParams GetBatchCrmEventQueryParams
}

type GetBatchCrmEventResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmEventResponseBody
}
