package shared

type EventUpdate struct {
	Additional    map[string]interface{} `json:"additional,omitempty"`
	Description   *string                `json:"description,omitempty"`
	EndDateTime   *string                `json:"endDateTime,omitempty"`
	IsAllDayEvent *bool                  `json:"isAllDayEvent,omitempty"`
	Location      *string                `json:"location,omitempty"`
	OwnerUserID   *string                `json:"ownerUserId,omitempty"`
	StartDateTime *string                `json:"startDateTime,omitempty"`
	Subject       *string                `json:"subject,omitempty"`
	Type          *string                `json:"type,omitempty"`
}
