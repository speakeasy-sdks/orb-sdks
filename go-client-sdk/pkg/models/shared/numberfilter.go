package shared

type NumberFilter struct {
	Equals *float64  `json:"equals,omitempty"`
	Gt     *float64  `json:"gt,omitempty"`
	Gte    *float64  `json:"gte,omitempty"`
	In     []float64 `json:"in,omitempty"`
	Lt     *float64  `json:"lt,omitempty"`
	Lte    *float64  `json:"lte,omitempty"`
	Not    *float64  `json:"not,omitempty"`
	NotIn  []float64 `json:"notIn,omitempty"`
}
