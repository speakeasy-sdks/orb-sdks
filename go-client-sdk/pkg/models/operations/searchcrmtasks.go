package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type SearchCrmTasksQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type SearchCrmTasksRequestBodyFilters struct {
	Body         *shared.StringFilter  `json:"body,omitempty"`
	CreatedTime  *shared.DateFilter    `json:"createdTime,omitempty"`
	DueDate      *shared.DateFilter    `json:"dueDate,omitempty"`
	ID           *shared.StringFilter  `json:"id,omitempty"`
	IsDone       *shared.BooleanFilter `json:"isDone,omitempty"`
	ModifiedTime *shared.DateFilter    `json:"modifiedTime,omitempty"`
	NativeID     *shared.StringFilter  `json:"nativeId,omitempty"`
	Priority     *shared.StringFilter  `json:"priority,omitempty"`
	Status       *shared.StringFilter  `json:"status,omitempty"`
	Subject      *shared.StringFilter  `json:"subject,omitempty"`
}

type SearchCrmTasksRequestBody struct {
	Filters *SearchCrmTasksRequestBodyFilters `json:"filters,omitempty"`
}

type SearchCrmTasksResponseBody struct {
	NextPageCursor *string       `json:"nextPageCursor,omitempty"`
	Tasks          []shared.Task `json:"tasks,omitempty"`
}

type SearchCrmTasksRequest struct {
	QueryParams SearchCrmTasksQueryParams
	Request     *SearchCrmTasksRequestBody `request:"mediaType=application/json"`
}

type SearchCrmTasksResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *SearchCrmTasksResponseBody
}
