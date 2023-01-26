package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCrmEmailRequestBody struct {
	AccessToken string              `json:"accessToken"`
	Email       *shared.EmailCreate `json:"email,omitempty"`
}

type PostCrmEmailResponseBody struct {
	ID string `json:"id"`
}

type PostCrmEmailRequest struct {
	Request *PostCrmEmailRequestBody `request:"mediaType=application/json"`
}

type PostCrmEmailResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmEmailResponseBody
}
