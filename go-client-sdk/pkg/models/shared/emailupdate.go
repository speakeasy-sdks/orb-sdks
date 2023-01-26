package shared

type EmailUpdate struct {
	Additional  map[string]interface{} `json:"additional,omitempty"`
	IsIncoming  *bool                  `json:"isIncoming,omitempty"`
	OwnerUserID *string                `json:"ownerUserId,omitempty"`
	Status      *string                `json:"status,omitempty"`
}
