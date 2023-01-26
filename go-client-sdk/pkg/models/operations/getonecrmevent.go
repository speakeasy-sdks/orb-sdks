package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneCrmEventQueryParams struct {
	AccessToken string `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool  `queryParam:"style=form,explode=true,name=allFields"`
	ID          string `queryParam:"style=form,explode=true,name=id"`
}

type GetOneCrmEventResponseBody struct {
	Event *shared.Event `json:"event,omitempty"`
}

type GetOneCrmEventRequest struct {
	QueryParams GetOneCrmEventQueryParams
}

type GetOneCrmEventResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneCrmEventResponseBody
}
