package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostWebhookRequestBody struct {
	AccessToken *string                       `json:"accessToken,omitempty"`
	Webhook     *shared.WebhookMetadataCreate `json:"webhook,omitempty"`
}

type PostWebhookResponseBody struct {
	Webhook *shared.WebhookMetadata `json:"webhook,omitempty"`
}

type PostWebhookRequest struct {
	Request *PostWebhookRequestBody `request:"mediaType=application/json"`
}

type PostWebhookResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostWebhookResponseBody
}
