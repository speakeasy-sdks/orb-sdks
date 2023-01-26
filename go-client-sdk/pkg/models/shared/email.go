package shared

type EmailAssociations struct {
	AccountIds  []string `json:"accountIds"`
	ContactIds  []string `json:"contactIds"`
	DealIds     []string `json:"dealIds"`
	LeadIds     []string `json:"leadIds"`
	OwnerUserID string   `json:"ownerUserId"`
}

// Email
// An email is a message sent from one person to another through an email service. Emails involve participants - the person who the email was sent to, or the person that sent it. Participants are usually a Contact, Lead, or User but in certain CRMs, can be a person not yet associated with a CRM object.
type Email struct {
	Additional    map[string]interface{} `json:"additional,omitempty"`
	Associations  EmailAssociations      `json:"associations"`
	Bcc           []string               `json:"bcc,omitempty"`
	Body          *string                `json:"body,omitempty"`
	BodyHTML      *string                `json:"bodyHtml,omitempty"`
	Cc            []string               `json:"cc,omitempty"`
	CreatedTime   string                 `json:"createdTime"`
	From          string                 `json:"from"`
	HasAttachment *bool                  `json:"hasAttachment,omitempty"`
	ID            string                 `json:"id"`
	IsBounced     *bool                  `json:"isBounced,omitempty"`
	IsIncoming    *bool                  `json:"isIncoming,omitempty"`
	MessageDate   *string                `json:"messageDate,omitempty"`
	ModifiedTime  string                 `json:"modifiedTime"`
	NativeID      string                 `json:"nativeId"`
	Status        *string                `json:"status,omitempty"`
	Subject       string                 `json:"subject"`
	To            []string               `json:"to"`
}
