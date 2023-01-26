package shared

type StringFilter struct {
	Contains   *string  `json:"contains,omitempty"`
	EndsWith   *string  `json:"endsWith,omitempty"`
	Equals     *string  `json:"equals,omitempty"`
	In         []string `json:"in,omitempty"`
	Not        *string  `json:"not,omitempty"`
	NotIn      []string `json:"notIn,omitempty"`
	StartsWith *string  `json:"startsWith,omitempty"`
}
