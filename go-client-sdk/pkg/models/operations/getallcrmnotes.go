package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmNotesQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmNotesResponseBody struct {
	NextPageCursor *string       `json:"nextPageCursor,omitempty"`
	Notes          []shared.Note `json:"notes,omitempty"`
}

type GetAllCrmNotesRequest struct {
	QueryParams GetAllCrmNotesQueryParams
}

type GetAllCrmNotesResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmNotesResponseBody
}
