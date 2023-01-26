package shared

type TaskUpdate struct {
	Additional map[string]interface{} `json:"additional,omitempty"`
	Body       *string                `json:"body,omitempty"`
	DueDate    *string                `json:"dueDate,omitempty"`
	IsDone     *bool                  `json:"isDone,omitempty"`
	Priority   *string                `json:"priority,omitempty"`
	Status     *string                `json:"status,omitempty"`
	Subject    *string                `json:"subject,omitempty"`
	UserID     *string                `json:"userId,omitempty"`
}
