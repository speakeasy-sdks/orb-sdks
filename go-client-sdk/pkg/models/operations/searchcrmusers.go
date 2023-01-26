package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type SearchCrmUsersQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type SearchCrmUsersRequestBodyFilters struct {
	CreatedTime  *shared.DateFilter   `json:"createdTime,omitempty"`
	Email        *shared.StringFilter `json:"email,omitempty"`
	FirstName    *shared.StringFilter `json:"firstName,omitempty"`
	ID           *shared.StringFilter `json:"id,omitempty"`
	LastName     *shared.StringFilter `json:"lastName,omitempty"`
	ModifiedTime *shared.DateFilter   `json:"modifiedTime,omitempty"`
	NativeID     *shared.StringFilter `json:"nativeId,omitempty"`
}

type SearchCrmUsersRequestBody struct {
	Filters *SearchCrmUsersRequestBodyFilters `json:"filters,omitempty"`
}

type SearchCrmUsersResponseBody struct {
	NextPageCursor *string       `json:"nextPageCursor,omitempty"`
	Users          []shared.User `json:"users,omitempty"`
}

type SearchCrmUsersRequest struct {
	QueryParams SearchCrmUsersQueryParams
	Request     *SearchCrmUsersRequestBody `request:"mediaType=application/json"`
}

type SearchCrmUsersResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *SearchCrmUsersResponseBody
}
