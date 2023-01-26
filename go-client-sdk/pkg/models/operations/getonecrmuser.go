package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneCrmUserQueryParams struct {
	AccessToken string `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool  `queryParam:"style=form,explode=true,name=allFields"`
	ID          string `queryParam:"style=form,explode=true,name=id"`
}

type GetOneCrmUserResponseBody struct {
	User *shared.User `json:"user,omitempty"`
}

type GetOneCrmUserRequest struct {
	QueryParams GetOneCrmUserQueryParams
}

type GetOneCrmUserResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneCrmUserResponseBody
}
