package shared

// NoteCreate
// Create a new Note. You may only associate a note with at most one entity of each type upon creation.
type NoteCreate struct {
	AccountID  *string                `json:"accountId,omitempty"`
	Additional map[string]interface{} `json:"additional,omitempty"`
	ContactID  *string                `json:"contactId,omitempty"`
	Content    string                 `json:"content"`
	DealID     *string                `json:"dealId,omitempty"`
	LeadID     *string                `json:"leadId,omitempty"`
	UserID     *string                `json:"userId,omitempty"`
}
