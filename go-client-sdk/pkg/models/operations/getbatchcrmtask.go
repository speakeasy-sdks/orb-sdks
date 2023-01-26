package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmTaskQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmTaskResponseBody struct {
	InvalidIds []string      `json:"invalidIds,omitempty"`
	Tasks      []shared.Task `json:"tasks,omitempty"`
}

type GetBatchCrmTaskRequest struct {
	QueryParams GetBatchCrmTaskQueryParams
}

type GetBatchCrmTaskResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmTaskResponseBody
}
