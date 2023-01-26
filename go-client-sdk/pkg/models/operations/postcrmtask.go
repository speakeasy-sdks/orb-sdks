package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCrmTaskRequestBody struct {
	AccessToken string             `json:"accessToken"`
	Task        *shared.TaskCreate `json:"task,omitempty"`
}

type PostCrmTaskResponseBody struct {
	ID string `json:"id"`
}

type PostCrmTaskRequest struct {
	Request *PostCrmTaskRequestBody `request:"mediaType=application/json"`
}

type PostCrmTaskResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmTaskResponseBody
}
