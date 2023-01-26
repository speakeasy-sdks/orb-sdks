package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmContactQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmContactResponseBody struct {
	Contacts   []shared.Contact `json:"contacts,omitempty"`
	InvalidIds []string         `json:"invalidIds,omitempty"`
}

type GetBatchCrmContactRequest struct {
	QueryParams GetBatchCrmContactQueryParams
}

type GetBatchCrmContactResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmContactResponseBody
}
