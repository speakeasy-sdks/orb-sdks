package shared

// NoteUpdate
// Update an existing Note. Please note that updating associations is not currently supported.
type NoteUpdate struct {
	Additional map[string]interface{} `json:"additional,omitempty"`
	Content    *string                `json:"content,omitempty"`
	UserID     *string                `json:"userId,omitempty"`
}
