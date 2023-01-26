package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type DeleteConnectionRequestBody struct {
	ConnectionID string `json:"connectionId"`
}

type DeleteConnectionSecurity struct {
	VesselAPIToken shared.SchemeVesselAPIToken `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteConnectionRequest struct {
	Request  *DeleteConnectionRequestBody `request:"mediaType=application/json"`
	Security DeleteConnectionSecurity
}

type DeleteConnectionResponse struct {
	ContentType string
	StatusCode  int64
}
