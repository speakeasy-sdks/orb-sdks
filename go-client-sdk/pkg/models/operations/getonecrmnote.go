package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneCrmNoteQueryParams struct {
	AccessToken string `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool  `queryParam:"style=form,explode=true,name=allFields"`
	ID          string `queryParam:"style=form,explode=true,name=id"`
}

type GetOneCrmNoteResponseBody struct {
	Note *shared.Note `json:"note,omitempty"`
}

type GetOneCrmNoteRequest struct {
	QueryParams GetOneCrmNoteQueryParams
}

type GetOneCrmNoteResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneCrmNoteResponseBody
}
