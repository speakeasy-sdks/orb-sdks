package shared

type EventAttendeeAssociations struct {
	AssociationID string `json:"associationId"`
	EventID       string `json:"eventId"`
}

// EventAttendee
// Event Attendees hold information about someone who attendeed or was invited to an event. Attendees are always associated with some Event and another person object such as a Contact, Lead, or Other.
type EventAttendee struct {
	Additional           map[string]interface{}    `json:"additional,omitempty"`
	AssociatedObjectType string                    `json:"associatedObjectType"`
	Associations         EventAttendeeAssociations `json:"associations"`
	CreatedTime          string                    `json:"createdTime"`
	Email                *string                   `json:"email,omitempty"`
	ID                   string                    `json:"id"`
	ModifiedTime         string                    `json:"modifiedTime"`
	NativeID             string                    `json:"nativeId"`
	Status               *string                   `json:"status,omitempty"`
}
