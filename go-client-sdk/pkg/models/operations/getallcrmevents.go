package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmEventsQueryParams struct {
	AccessToken *string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmEventsResponseBody struct {
	Events         []shared.Event `json:"events,omitempty"`
	NextPageCursor *string        `json:"nextPageCursor,omitempty"`
}

type GetAllCrmEventsRequest struct {
	QueryParams GetAllCrmEventsQueryParams
}

type GetAllCrmEventsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmEventsResponseBody
}
