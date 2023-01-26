package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetBatchCrmEmailQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Ids         *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetBatchCrmEmailResponseBody struct {
	Emails     []shared.Email `json:"emails,omitempty"`
	InvalidIds []string       `json:"invalidIds,omitempty"`
}

type GetBatchCrmEmailRequest struct {
	QueryParams GetBatchCrmEmailQueryParams
}

type GetBatchCrmEmailResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetBatchCrmEmailResponseBody
}
