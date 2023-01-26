package shared

type Event struct {
	CustomerID         string                 `json:"customer_id"`
	EventName          string                 `json:"event_name"`
	ExternalCustomerID *string                `json:"external_customer_id,omitempty"`
	ID                 string                 `json:"id"`
	Properties         map[string]interface{} `json:"properties"`
	Timestamp          string                 `json:"timestamp"`
}
