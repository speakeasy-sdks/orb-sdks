package shared

// ContactUpdate
// Update a Contact.
type ContactUpdate struct {
	Additional  map[string]interface{} `json:"additional,omitempty"`
	Email       *string                `json:"email,omitempty"`
	FirstName   *string                `json:"firstName,omitempty"`
	JobTitle    *string                `json:"jobTitle,omitempty"`
	LastName    *string                `json:"lastName,omitempty"`
	MobilePhone *string                `json:"mobilePhone,omitempty"`
	Phone       *string                `json:"phone,omitempty"`
}
