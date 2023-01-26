package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type SearchCrmNotesQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type SearchCrmNotesRequestBodyFilters struct {
	Content      *shared.StringFilter `json:"content,omitempty"`
	ContentHTML  *shared.StringFilter `json:"contentHtml,omitempty"`
	ContentText  *shared.StringFilter `json:"contentText,omitempty"`
	CreatedTime  *shared.DateFilter   `json:"createdTime,omitempty"`
	ID           *shared.StringFilter `json:"id,omitempty"`
	ModifiedTime *shared.DateFilter   `json:"modifiedTime,omitempty"`
	NativeID     *shared.StringFilter `json:"nativeId,omitempty"`
}

type SearchCrmNotesRequestBody struct {
	Filters *SearchCrmNotesRequestBodyFilters `json:"filters,omitempty"`
}

type SearchCrmNotesResponseBody struct {
	NextPageCursor *string       `json:"nextPageCursor,omitempty"`
	Notes          []shared.Note `json:"notes,omitempty"`
}

type SearchCrmNotesRequest struct {
	QueryParams SearchCrmNotesQueryParams
	Request     *SearchCrmNotesRequestBody `request:"mediaType=application/json"`
}

type SearchCrmNotesResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *SearchCrmNotesResponseBody
}
