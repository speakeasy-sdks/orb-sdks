package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCrmNoteRequestBody struct {
	AccessToken string            `json:"accessToken"`
	Note        shared.NoteCreate `json:"note"`
}

type PostCrmNoteResponseBody struct {
	ID string `json:"id"`
}

type PostCrmNoteRequest struct {
	Request *PostCrmNoteRequestBody `request:"mediaType=application/json"`
}

type PostCrmNoteResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmNoteResponseBody
}
