package operations

type DeleteWebhookRequestBody struct {
	AccessToken *string `json:"accessToken,omitempty"`
	WebhookID   *string `json:"webhookId,omitempty"`
}

type DeleteWebhookRequest struct {
	Request *DeleteWebhookRequestBody `request:"mediaType=application/json"`
}

type DeleteWebhookResponse struct {
	ContentType string
	StatusCode  int64
}
