package shared

type LeadCreate struct {
	Account     *string                `json:"account,omitempty"`
	Additional  map[string]interface{} `json:"additional,omitempty"`
	Email       *string                `json:"email,omitempty"`
	FirstName   *string                `json:"firstName,omitempty"`
	JobTitle    *string                `json:"jobTitle,omitempty"`
	LastName    string                 `json:"lastName"`
	MobilePhone *string                `json:"mobilePhone,omitempty"`
	Phone       *string                `json:"phone,omitempty"`
}
