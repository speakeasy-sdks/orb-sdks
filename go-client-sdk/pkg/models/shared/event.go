package shared

type EventAssociations struct {
	AccountIds       []string `json:"accountIds"`
	ContactIds       []string `json:"contactIds"`
	DealIds          []string `json:"dealIds"`
	EventAttendeeIds []string `json:"eventAttendeeIds"`
	LeadIds          []string `json:"leadIds"`
	OwnerUserID      string   `json:"ownerUserId"`
}

// Event
// Events are a type of activity that has attendees and takes place at a certain point in time (i.e., has a start and end date).
// For the currently supported CRMs, these are the objects Events most closely maps to:
// - Salesforce = Events
// - HubSpot = Meetings
// - Pipedrive = Activities
type Event struct {
	Additional    map[string]interface{} `json:"additional,omitempty"`
	Associations  EventAssociations      `json:"associations"`
	CreatedTime   string                 `json:"createdTime"`
	Description   *string                `json:"description,omitempty"`
	EndDateTime   *string                `json:"endDateTime,omitempty"`
	ID            string                 `json:"id"`
	IsAllDayEvent *bool                  `json:"isAllDayEvent,omitempty"`
	Location      *string                `json:"location,omitempty"`
	ModifiedTime  string                 `json:"modifiedTime"`
	NativeID      string                 `json:"nativeId"`
	StartDateTime *string                `json:"startDateTime,omitempty"`
	Subject       *string                `json:"subject,omitempty"`
	Type          *string                `json:"type,omitempty"`
}
