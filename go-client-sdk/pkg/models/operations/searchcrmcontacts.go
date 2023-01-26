package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type SearchCrmContactsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type SearchCrmContactsRequestBodyFilters struct {
	CreatedTime  *shared.DateFilter   `json:"createdTime,omitempty"`
	Email        *shared.StringFilter `json:"email,omitempty"`
	FirstName    *shared.StringFilter `json:"firstName,omitempty"`
	ID           *shared.StringFilter `json:"id,omitempty"`
	JobTitle     *shared.StringFilter `json:"jobTitle,omitempty"`
	LastName     *shared.StringFilter `json:"lastName,omitempty"`
	MobilePhone  *shared.StringFilter `json:"mobilePhone,omitempty"`
	ModifiedTime *shared.DateFilter   `json:"modifiedTime,omitempty"`
	NativeID     *shared.StringFilter `json:"nativeId,omitempty"`
	Phone        *shared.StringFilter `json:"phone,omitempty"`
}

type SearchCrmContactsRequestBody struct {
	Filters *SearchCrmContactsRequestBodyFilters `json:"filters,omitempty"`
}

type SearchCrmContactsResponseBody struct {
	Contacts       []shared.Contact `json:"contacts,omitempty"`
	NextPageCursor *string          `json:"nextPageCursor,omitempty"`
}

type SearchCrmContactsRequest struct {
	QueryParams SearchCrmContactsQueryParams
	Request     *SearchCrmContactsRequestBody `request:"mediaType=application/json"`
}

type SearchCrmContactsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *SearchCrmContactsResponseBody
}
