package shared

type LeadAssociations struct {
	AccountIds       []string `json:"accountIds"`
	ContactIds       []string `json:"contactIds"`
	EventAttendeeIds []string `json:"eventAttendeeIds"`
	EventIds         []string `json:"eventIds"`
	NoteIds          []string `json:"noteIds"`
	TaskIds          []string `json:"taskIds"`
}

// Lead
// A Lead represents an individual, or sometimes an organization, that is interested in purchasing your product (i.e., is a potential Deal).
// *CRM Caveats*:
// - HubSpot: we consider contacts with the `leadStatus` set to be leads.
type Lead struct {
	Account      *string                `json:"account,omitempty"`
	Additional   map[string]interface{} `json:"additional,omitempty"`
	Associations LeadAssociations       `json:"associations"`
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
