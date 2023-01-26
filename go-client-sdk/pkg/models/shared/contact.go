package shared

type ContactAssociations struct {
	AccountIds       []string `json:"accountIds"`
	DealIds          []string `json:"dealIds"`
	EventAttendeeIds []string `json:"eventAttendeeIds"`
	EventIds         []string `json:"eventIds"`
	LeadIds          []string `json:"leadIds"`
	NoteIds          []string `json:"noteIds"`
	TaskIds          []string `json:"taskIds"`
}

// Contact
// Information about an individual affiliated with another CRM Object (e.g., a Lead, a Deal, etc)
type Contact struct {
	Additional   map[string]interface{} `json:"additional,omitempty"`
	Associations ContactAssociations    `json:"associations"`
	CreatedTime  string                 `json:"createdTime"`
	Email        *string                `json:"email,omitempty"`
	FirstName    *string                `json:"firstName,omitempty"`
	ID           string                 `json:"id"`
	JobTitle     *string                `json:"jobTitle,omitempty"`
	LastName     *string                `json:"lastName,omitempty"`
	MobilePhone  *string                `json:"mobilePhone,omitempty"`
	ModifiedTime string                 `json:"modifiedTime"`
	NativeID     string                 `json:"nativeId"`
	Phone        *string                `json:"phone,omitempty"`
}
