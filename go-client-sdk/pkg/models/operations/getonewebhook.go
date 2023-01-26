package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneWebhookQueryParams struct {
	AccessToken *string `queryParam:"style=form,explode=true,name=accessToken"`
	WebhookID   *string `queryParam:"style=form,explode=true,name=webhookId"`
}

type GetOneWebhookResponseBody struct {
	Webhook *shared.WebhookMetadata `json:"webhook,omitempty"`
}

type GetOneWebhookRequest struct {
	QueryParams GetOneWebhookQueryParams
}

type GetOneWebhookResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneWebhookResponseBody
}
