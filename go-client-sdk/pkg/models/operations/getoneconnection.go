package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneConnectionQueryParams struct {
	ConnectionID string `queryParam:"style=form,explode=true,name=connectionId"`
}

type GetOneConnectionResponseBody struct {
	Connection *shared.Connection `json:"connection,omitempty"`
}

type GetOneConnectionRequest struct {
	QueryParams GetOneConnectionQueryParams
}

type GetOneConnectionResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneConnectionResponseBody
}
