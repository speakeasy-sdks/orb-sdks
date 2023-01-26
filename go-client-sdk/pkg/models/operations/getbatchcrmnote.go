package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmNoteQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmNoteResponseBody struct {
	InvalidIds []string      `json:"invalidIds,omitempty"`
	Notes      []shared.Note `json:"notes,omitempty"`
}

type GetBatchCrmNoteRequest struct {
	QueryParams GetBatchCrmNoteQueryParams
}

type GetBatchCrmNoteResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmNoteResponseBody
}
