package shared

type BooleanFilter struct {
	Equals *bool `json:"equals,omitempty"`
	Not    *bool `json:"not,omitempty"`
}
