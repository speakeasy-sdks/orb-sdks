package shared

type EventCreate struct {
	AccountID     *string                `json:"accountId,omitempty"`
	Additional    map[string]interface{} `json:"additional,omitempty"`
	ContactID     *string                `json:"contactId,omitempty"`
	DealID        *string                `json:"dealId,omitempty"`
	Description   *string                `json:"description,omitempty"`
	EndDateTime   string                 `json:"endDateTime"`
	IsAllDayEvent *bool                  `json:"isAllDayEvent,omitempty"`
	LeadID        *string                `json:"leadId,omitempty"`
	Location      *string                `json:"location,omitempty"`
	OwnerUserID   *string                `json:"ownerUserId,omitempty"`
	StartDateTime string                 `json:"startDateTime"`
	Subject       *string                `json:"subject,omitempty"`
	Type          *string                `json:"type,omitempty"`
}
