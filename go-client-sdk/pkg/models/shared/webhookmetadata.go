package shared

type WebhookMetadata struct {
	ConnectionID *string `json:"connectionId,omitempty"`
	CreatedTime  *string `json:"createdTime,omitempty"`
	WebhookID    *string `json:"webhookId,omitempty"`
	WebhookURL   *string `json:"webhookUrl,omitempty"`
}
