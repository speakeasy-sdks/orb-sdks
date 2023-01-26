package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetDetailsCrmDealQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	ID          *string `queryParam:"style=form,explode=true,name=id"`
}

type GetDetailsCrmDealResponseBody struct {
	Fields         []shared.Field `json:"fields,omitempty"`
	NextPageCursor *string        `json:"nextPageCursor,omitempty"`
}

type GetDetailsCrmDealRequest struct {
	QueryParams GetDetailsCrmDealQueryParams
}

type GetDetailsCrmDealResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetDetailsCrmDealResponseBody
}
