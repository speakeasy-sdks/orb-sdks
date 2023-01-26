package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmDealsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetAllCrmDealsResponseBody struct {
	Deals          []shared.Deal `json:"deals,omitempty"`
	NextPageCursor *string       `json:"nextPageCursor,omitempty"`
}

type GetAllCrmDealsRequest struct {
	QueryParams GetAllCrmDealsQueryParams
}

type GetAllCrmDealsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmDealsResponseBody
}
