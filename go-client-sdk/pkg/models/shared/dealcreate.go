package shared

type DealCreate struct {
	AccountID   *string                `json:"accountId,omitempty"`
	Additional  map[string]interface{} `json:"additional,omitempty"`
	Amount      *float64               `json:"amount,omitempty"`
	CloseDate   string                 `json:"closeDate"`
	Name        string                 `json:"name"`
	Probability *string                `json:"probability,omitempty"`
	Stage       *string                `json:"stage,omitempty"`
}
