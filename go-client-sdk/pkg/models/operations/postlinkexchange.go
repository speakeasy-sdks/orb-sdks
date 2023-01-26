package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostLinkExchangeRequestBody struct {
	PublicToken string `json:"publicToken"`
}

type PostLinkExchangeSecurity struct {
	VesselAPIToken shared.SchemeVesselAPIToken `security:"scheme,type=apiKey,subtype=header"`
}

type PostLinkExchangeResponseBodyIntegrationIDEnum string

const (
	PostLinkExchangeResponseBodyIntegrationIDEnumSalesforce PostLinkExchangeResponseBodyIntegrationIDEnum = "salesforce"
	PostLinkExchangeResponseBodyIntegrationIDEnumHubspot    PostLinkExchangeResponseBodyIntegrationIDEnum = "hubspot"
	PostLinkExchangeResponseBodyIntegrationIDEnumPipedrive  PostLinkExchangeResponseBodyIntegrationIDEnum = "pipedrive"
)

type PostLinkExchangeResponseBody struct {
	AccessToken   string                                        `json:"accessToken"`
	ConnectionID  string                                        `json:"connectionId"`
	IntegrationID PostLinkExchangeResponseBodyIntegrationIDEnum `json:"integrationId"`
	NativeOrgID   string                                        `json:"nativeOrgId"`
	NativeOrgURL  string                                        `json:"nativeOrgURL"`
}

type PostLinkExchangeRequest struct {
	Request  *PostLinkExchangeRequestBody `request:"mediaType=application/json"`
	Security PostLinkExchangeSecurity
}

type PostLinkExchangeResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostLinkExchangeResponseBody
}
