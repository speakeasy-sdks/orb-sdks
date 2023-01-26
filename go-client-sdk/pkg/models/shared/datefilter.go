package shared

type DateFilter struct {
	Equals *string  `json:"equals,omitempty"`
	Gt     *string  `json:"gt,omitempty"`
	Gte    *string  `json:"gte,omitempty"`
	In     []string `json:"in,omitempty"`
	Lt     *string  `json:"lt,omitempty"`
	Lte    *string  `json:"lte,omitempty"`
	Not    *string  `json:"not,omitempty"`
	NotIn  []string `json:"notIn,omitempty"`
}
