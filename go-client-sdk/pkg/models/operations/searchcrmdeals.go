package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type SearchCrmDealsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type SearchCrmDealsRequestBodyFilters struct {
	Amount          *shared.NumberFilter  `json:"amount,omitempty"`
	CloseDate       *shared.DateFilter    `json:"closeDate,omitempty"`
	CreatedTime     *shared.DateFilter    `json:"createdTime,omitempty"`
	ExpectedRevenue *shared.NumberFilter  `json:"expectedRevenue,omitempty"`
	ID              *shared.StringFilter  `json:"id,omitempty"`
	IsClosed        *shared.BooleanFilter `json:"isClosed,omitempty"`
	IsWon           *shared.BooleanFilter `json:"isWon,omitempty"`
	ModifiedTime    *shared.DateFilter    `json:"modifiedTime,omitempty"`
	Name            *shared.StringFilter  `json:"name,omitempty"`
	NativeID        *shared.StringFilter  `json:"nativeId,omitempty"`
	Probability     *shared.NumberFilter  `json:"probability,omitempty"`
	Stage           *shared.StringFilter  `json:"stage,omitempty"`
}

type SearchCrmDealsRequestBody struct {
	Filters *SearchCrmDealsRequestBodyFilters `json:"filters,omitempty"`
}

type SearchCrmDealsResponseBody struct {
	Deals          []shared.Deal `json:"deals,omitempty"`
	NextPageCursor *string       `json:"nextPageCursor,omitempty"`
}

type SearchCrmDealsRequest struct {
	QueryParams SearchCrmDealsQueryParams
	Request     *SearchCrmDealsRequestBody `request:"mediaType=application/json"`
}

type SearchCrmDealsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *SearchCrmDealsResponseBody
}
