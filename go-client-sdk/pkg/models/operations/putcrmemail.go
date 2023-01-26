package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCrmEmailRequestBody struct {
	AccessToken string              `json:"accessToken"`
	Email       *shared.EmailUpdate `json:"email,omitempty"`
	ID          string              `json:"id"`
}

type PutCrmEmailResponseBody struct {
	ID string `json:"id"`
}

type PutCrmEmailRequest struct {
	Request *PutCrmEmailRequestBody `request:"mediaType=application/json"`
}

type PutCrmEmailResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PutCrmEmailResponseBody
}
