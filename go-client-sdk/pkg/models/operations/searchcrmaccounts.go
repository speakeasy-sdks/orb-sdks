package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type SearchCrmAccountsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type SearchCrmAccountsRequestBodyFilters struct {
	AnnualRevenue     *shared.NumberFilter `json:"annualRevenue,omitempty"`
	City              *shared.StringFilter `json:"city,omitempty"`
	Country           *shared.StringFilter `json:"country,omitempty"`
	CreatedTime       *shared.DateFilter   `json:"createdTime,omitempty"`
	Description       *shared.StringFilter `json:"description,omitempty"`
	ID                *shared.StringFilter `json:"id,omitempty"`
	Industry          *shared.StringFilter `json:"industry,omitempty"`
	ModifiedTime      *shared.DateFilter   `json:"modifiedTime,omitempty"`
	Name              *shared.StringFilter `json:"name,omitempty"`
	NativeID          *shared.StringFilter `json:"nativeId,omitempty"`
	NumberOfEmployees *shared.NumberFilter `json:"numberOfEmployees,omitempty"`
	Phone             *shared.StringFilter `json:"phone,omitempty"`
	PostalCode        *shared.StringFilter `json:"postalCode,omitempty"`
	State             *shared.StringFilter `json:"state,omitempty"`
	Street            *shared.StringFilter `json:"street,omitempty"`
	Website           *shared.StringFilter `json:"website,omitempty"`
}

type SearchCrmAccountsRequestBody struct {
	Filters *SearchCrmAccountsRequestBodyFilters `json:"filters,omitempty"`
}

type SearchCrmAccountsResponseBody struct {
	Accounts       []shared.Account `json:"accounts,omitempty"`
	NextPageCursor *string          `json:"nextPageCursor,omitempty"`
}

type SearchCrmAccountsRequest struct {
	QueryParams SearchCrmAccountsQueryParams
	Request     *SearchCrmAccountsRequestBody `request:"mediaType=application/json"`
}

type SearchCrmAccountsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *SearchCrmAccountsResponseBody
}
