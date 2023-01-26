package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCrmTaskRequestBody struct {
	AccessToken string             `json:"accessToken"`
	ID          string             `json:"id"`
	Task        *shared.TaskUpdate `json:"task,omitempty"`
}

type PutCrmTaskResponseBody struct {
	ID string `json:"id"`
}

type PutCrmTaskRequest struct {
	Request *PutCrmTaskRequestBody `request:"mediaType=application/json"`
}

type PutCrmTaskResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PutCrmTaskResponseBody
}
