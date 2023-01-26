package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmAccountQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmAccountResponseBody struct {
	Accounts   []shared.Account `json:"accounts,omitempty"`
	InvalidIds []string         `json:"invalidIds,omitempty"`
}

type GetBatchCrmAccountRequest struct {
	QueryParams GetBatchCrmAccountQueryParams
}

type GetBatchCrmAccountResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmAccountResponseBody
}
