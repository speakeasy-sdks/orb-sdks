package shared

type StringListFilter struct {
	Has      *string  `json:"has,omitempty"`
	HasEvery []string `json:"hasEvery,omitempty"`
	HasSome  []string `json:"hasSome,omitempty"`
	IsEmpty  *bool    `json:"isEmpty,omitempty"`
}
