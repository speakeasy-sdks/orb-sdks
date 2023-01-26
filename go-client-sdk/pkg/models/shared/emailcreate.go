package shared

// EmailCreateContact
// Associated Contacts must participate in the email (i.e., have a role).
type EmailCreateContact struct {
	ID   *string      `json:"id,omitempty"`
	Role *interface{} `json:"role,omitempty"`
}

// EmailCreateLead
// Associated Leads must participate in the email (i.e., have a role).
type EmailCreateLead struct {
	ID   *string      `json:"id,omitempty"`
	Role *interface{} `json:"role,omitempty"`
}

type EmailCreate struct {
	AccountID   *string                `json:"accountId,omitempty"`
	Additional  map[string]interface{} `json:"additional,omitempty"`
	Bcc         []string               `json:"bcc,omitempty"`
	Body        *string                `json:"body,omitempty"`
	BodyHTML    *string                `json:"bodyHtml,omitempty"`
	Cc          []string               `json:"cc,omitempty"`
	Contact     *EmailCreateContact    `json:"contact,omitempty"`
	DealID      *string                `json:"dealId,omitempty"`
	From        string                 `json:"from"`
	IsIncoming  *bool                  `json:"isIncoming,omitempty"`
	Lead        *EmailCreateLead       `json:"lead,omitempty"`
	MessageDate *string                `json:"messageDate,omitempty"`
	OwnerUserID *string                `json:"ownerUserId,omitempty"`
	Status      *string                `json:"status,omitempty"`
	Subject     string                 `json:"subject"`
	To          []string               `json:"to"`
}
