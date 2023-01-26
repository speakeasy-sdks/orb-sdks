package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetDetailsCrmLeadQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
}

type GetDetailsCrmLeadResponseBody struct {
	Fields         []shared.Field `json:"fields,omitempty"`
	NextPageCursor *string        `json:"nextPageCursor,omitempty"`
}

type GetDetailsCrmLeadRequest struct {
	QueryParams GetDetailsCrmLeadQueryParams
}

type GetDetailsCrmLeadResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetDetailsCrmLeadResponseBody
}
