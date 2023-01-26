package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmUserQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmUserResponseBody struct {
	InvalidIds []string      `json:"invalidIds,omitempty"`
	Users      []shared.User `json:"users,omitempty"`
}

type GetBatchCrmUserRequest struct {
	QueryParams GetBatchCrmUserQueryParams
}

type GetBatchCrmUserResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmUserResponseBody
}
