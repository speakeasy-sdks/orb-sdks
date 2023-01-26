package shared

// WebhookMetadataCreate
// Information describing a webhook
type WebhookMetadataCreate struct {
	WebhookURL *string `json:"webhookUrl,omitempty"`
}
