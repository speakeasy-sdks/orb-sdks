package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmTasksQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmTasksResponseBody struct {
	NextPageCursor *string       `json:"nextPageCursor,omitempty"`
	Tasks          []shared.Task `json:"tasks,omitempty"`
}

type GetAllCrmTasksRequest struct {
	QueryParams GetAllCrmTasksQueryParams
}

type GetAllCrmTasksResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmTasksResponseBody
}
