package shared

type TaskCreate struct {
	AccountID  *string                `json:"accountId,omitempty"`
	Additional map[string]interface{} `json:"additional,omitempty"`
	Body       *string                `json:"body,omitempty"`
	ContactID  *string                `json:"contactId,omitempty"`
	DealID     *string                `json:"dealId,omitempty"`
	DueDate    *string                `json:"dueDate,omitempty"`
	IsDone     *bool                  `json:"isDone,omitempty"`
	LeadID     *string                `json:"leadId,omitempty"`
	Priority   *string                `json:"priority,omitempty"`
	Status     *string                `json:"status,omitempty"`
	Subject    *string                `json:"subject,omitempty"`
	UserID     *string                `json:"userId,omitempty"`
}
