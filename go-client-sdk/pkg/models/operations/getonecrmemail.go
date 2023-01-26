package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneCrmEmailQueryParams struct {
	AccessToken string `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool  `queryParam:"style=form,explode=true,name=allFields"`
	ID          string `queryParam:"style=form,explode=true,name=id"`
}

type GetOneCrmEmailResponseBody struct {
	Email *shared.Email `json:"email,omitempty"`
}

type GetOneCrmEmailRequest struct {
	QueryParams GetOneCrmEmailQueryParams
}

type GetOneCrmEmailResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneCrmEmailResponseBody
}
