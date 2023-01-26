package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type SearchCrmEmailsQueryParams struct {
	AccessToken string   `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool    `queryParam:"style=form,explode=true,name=allFields"`
	Cursor      *string  `queryParam:"style=form,explode=true,name=cursor"`
	Limit       *float64 `queryParam:"style=form,explode=true,name=limit"`
}

type SearchCrmEmailsRequestBodyFilters struct {
	Bcc           *shared.StringListFilter `json:"bcc,omitempty"`
	Body          *shared.StringFilter     `json:"body,omitempty"`
	BodyHTML      *shared.StringFilter     `json:"bodyHtml,omitempty"`
	Cc            *shared.StringListFilter `json:"cc,omitempty"`
	CreatedTime   *shared.DateFilter       `json:"createdTime,omitempty"`
	From          *shared.StringFilter     `json:"from,omitempty"`
	HasAttachment *shared.BooleanFilter    `json:"hasAttachment,omitempty"`
	ID            *shared.StringFilter     `json:"id,omitempty"`
	IsBounced     *shared.BooleanFilter    `json:"isBounced,omitempty"`
	IsIncoming    *shared.BooleanFilter    `json:"isIncoming,omitempty"`
	MessageDate   *shared.DateFilter       `json:"messageDate,omitempty"`
	ModifiedTime  *shared.DateFilter       `json:"modifiedTime,omitempty"`
	NativeID      *shared.StringFilter     `json:"nativeId,omitempty"`
	Status        *shared.StringFilter     `json:"status,omitempty"`
	Subject       *shared.StringFilter     `json:"subject,omitempty"`
	To            *shared.StringListFilter `json:"to,omitempty"`
}

type SearchCrmEmailsRequestBody struct {
	Filters *SearchCrmEmailsRequestBodyFilters `json:"filters,omitempty"`
}

type SearchCrmEmailsResponseBody struct {
	Emails         []shared.Email `json:"emails,omitempty"`
	NextPageCursor *string        `json:"nextPageCursor,omitempty"`
}

type SearchCrmEmailsRequest struct {
	QueryParams SearchCrmEmailsQueryParams
	Request     *SearchCrmEmailsRequestBody `request:"mediaType=application/json"`
}

type SearchCrmEmailsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *SearchCrmEmailsResponseBody
}
