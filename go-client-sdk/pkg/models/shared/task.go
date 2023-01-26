package shared

type TaskAssociations struct {
	AccountIds  []string `json:"accountIds"`
	ContactIds  []string `json:"contactIds"`
	DealIds     []string `json:"dealIds"`
	LeadIds     []string `json:"leadIds"`
	OwnerUserID string   `json:"ownerUserId"`
}

// Task
// A task attached to some CRM object
type Task struct {
	Additional   map[string]interface{} `json:"additional,omitempty"`
	Associations TaskAssociations       `json:"associations"`
	Body         *string                `json:"body,omitempty"`
	CreatedTime  string                 `json:"createdTime"`
	DueDate      *string                `json:"dueDate,omitempty"`
	ID           string                 `json:"id"`
	IsDone       *bool                  `json:"isDone,omitempty"`
	ModifiedTime string                 `json:"modifiedTime"`
	NativeID     string                 `json:"nativeId"`
	Priority     *string                `json:"priority,omitempty"`
	Status       *string                `json:"status,omitempty"`
	Subject      *string                `json:"subject,omitempty"`
}
