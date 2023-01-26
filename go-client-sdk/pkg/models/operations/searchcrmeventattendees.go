package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type SearchCrmEventAttendeesQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type SearchCrmEventAttendeesRequestBodyFilters struct {
	AssociatedObjectType *shared.StringFilter `json:"associatedObjectType,omitempty"`
	CreatedTime          *shared.DateFilter   `json:"createdTime,omitempty"`
	Email                *shared.StringFilter `json:"email,omitempty"`
	ID                   *shared.StringFilter `json:"id,omitempty"`
	ModifiedTime         *shared.DateFilter   `json:"modifiedTime,omitempty"`
	NativeID             *shared.StringFilter `json:"nativeId,omitempty"`
	Status               *shared.StringFilter `json:"status,omitempty"`
}

type SearchCrmEventAttendeesRequestBody struct {
	Filters *SearchCrmEventAttendeesRequestBodyFilters `json:"filters,omitempty"`
}

type SearchCrmEventAttendeesResponseBody struct {
	EventAttendees []shared.EventAttendee `json:"eventAttendees,omitempty"`
	NextPageCursor *string                `json:"nextPageCursor,omitempty"`
}

type SearchCrmEventAttendeesRequest struct {
	QueryParams SearchCrmEventAttendeesQueryParams
	Request     *SearchCrmEventAttendeesRequestBody `request:"mediaType=application/json"`
}

type SearchCrmEventAttendeesResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *SearchCrmEventAttendeesResponseBody
}
