package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCrmContactRequestBody struct {
	AccessToken string               `json:"accessToken"`
	Contact     shared.ContactCreate `json:"contact"`
}

type PostCrmContactResponseBody struct {
	ID *string `json:"id,omitempty"`
}

type PostCrmContactRequest struct {
	Request *PostCrmContactRequestBody `request:"mediaType=application/json"`
}

type PostCrmContactResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmContactResponseBody
}
