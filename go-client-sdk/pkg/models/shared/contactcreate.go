package shared

// ContactCreate
// Properties that a contact can be created with
type ContactCreate struct {
	Additional  map[string]interface{} `json:"additional,omitempty"`
	Email       *string                `json:"email,omitempty"`
	FirstName   *string                `json:"firstName,omitempty"`
	JobTitle    *string                `json:"jobTitle,omitempty"`
	LastName    string                 `json:"lastName"`
	MobilePhone *string                `json:"mobilePhone,omitempty"`
	Phone       *string                `json:"phone,omitempty"`
}
