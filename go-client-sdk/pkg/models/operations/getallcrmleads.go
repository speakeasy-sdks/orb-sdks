package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmLeadsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmLeadsResponseBody struct {
	Leads          []shared.Lead `json:"leads,omitempty"`
	NextPageCursor *string       `json:"nextPageCursor,omitempty"`
}

type GetAllCrmLeadsRequest struct {
	QueryParams GetAllCrmLeadsQueryParams
}

type GetAllCrmLeadsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmLeadsResponseBody
}
