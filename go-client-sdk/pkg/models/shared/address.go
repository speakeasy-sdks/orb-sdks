package shared

type Address struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	PostalCode *string `json:"postalCode,omitempty"`
	State      *string `json:"state,omitempty"`
	Street     *string `json:"street,omitempty"`
}
