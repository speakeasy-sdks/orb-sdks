package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetAllCrmConnectionsResponseBody struct {
	Connections []shared.Connection `json:"connections,omitempty"`
}

type GetAllCrmConnectionsResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetAllCrmConnectionsResponseBody
}
