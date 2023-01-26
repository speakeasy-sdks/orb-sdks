package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCrmNoteRequestBody struct {
	AccessToken string            `json:"accessToken"`
	ID          string            `json:"id"`
	Note        shared.NoteUpdate `json:"note"`
}

type PutCrmNoteResponseBody struct {
	ID string `json:"id"`
}

type PutCrmNoteRequest struct {
	Request *PutCrmNoteRequestBody `request:"mediaType=application/json"`
}

type PutCrmNoteResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PutCrmNoteResponseBody
}
