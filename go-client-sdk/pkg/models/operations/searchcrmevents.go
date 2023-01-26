package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type SearchCrmEventsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type SearchCrmEventsRequestBodyFilters struct {
	CreatedTime   *shared.DateFilter    `json:"createdTime,omitempty"`
	Description   *shared.StringFilter  `json:"description,omitempty"`
	EndDateTime   *shared.DateFilter    `json:"endDateTime,omitempty"`
	ID            *shared.StringFilter  `json:"id,omitempty"`
	IsAllDayEvent *shared.BooleanFilter `json:"isAllDayEvent,omitempty"`
	Location      *shared.StringFilter  `json:"location,omitempty"`
	ModifiedTime  *shared.DateFilter    `json:"modifiedTime,omitempty"`
	NativeID      *shared.StringFilter  `json:"nativeId,omitempty"`
	StartDateTime *shared.DateFilter    `json:"startDateTime,omitempty"`
	Subject       *shared.StringFilter  `json:"subject,omitempty"`
	Type          *shared.StringFilter  `json:"type,omitempty"`
}

type SearchCrmEventsRequestBody struct {
	Filters *SearchCrmEventsRequestBodyFilters `json:"filters,omitempty"`
}

type SearchCrmEventsResponseBody struct {
	Events         []shared.Event `json:"events,omitempty"`
	NextPageCursor *string        `json:"nextPageCursor,omitempty"`
}

type SearchCrmEventsRequest struct {
	QueryParams SearchCrmEventsQueryParams
	Request     *SearchCrmEventsRequestBody `request:"mediaType=application/json"`
}

type SearchCrmEventsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *SearchCrmEventsResponseBody
}
