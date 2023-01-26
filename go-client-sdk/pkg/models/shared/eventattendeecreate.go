package shared

type EventAttendeeCreate struct {
	Additional           map[string]interface{} `json:"additional,omitempty"`
	AssociatedObjectType string                 `json:"associatedObjectType"`
	AssociationID        *string                `json:"associationId,omitempty"`
	Email                *string                `json:"email,omitempty"`
	EventID              string                 `json:"eventId"`
	Status               *string                `json:"status,omitempty"`
}
