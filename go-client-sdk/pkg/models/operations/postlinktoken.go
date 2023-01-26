package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostLinkTokenSecurity struct {
	VesselAPIToken shared.SchemeVesselAPIToken `security:"scheme,type=apiKey,subtype=header"`
}

type PostLinkTokenResponseBody struct {
	LinkToken *string `json:"linkToken,omitempty"`
}

type PostLinkTokenRequest struct {
	Security PostLinkTokenSecurity
}

type PostLinkTokenResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostLinkTokenResponseBody
}
