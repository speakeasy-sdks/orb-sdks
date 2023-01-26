package operations

type PostIngestDebugEnum string

const (
	PostIngestDebugEnumTrue  PostIngestDebugEnum = "true"
	PostIngestDebugEnumFalse PostIngestDebugEnum = "false"
)

type PostIngestQueryParams struct {
	Debug *PostIngestDebugEnum `queryParam:"style=form,explode=true,name=debug"`
}

type PostIngestRequestBodyEvents struct {
	CustomerID         *string                `json:"customer_id,omitempty"`
	EventName          string                 `json:"event_name"`
	ExternalCustomerID *string                `json:"external_customer_id,omitempty"`
	IdempotencyKey     string                 `json:"idempotency_key"`
	Properties         map[string]interface{} `json:"properties"`
	Timestamp          string                 `json:"timestamp"`
}

type PostIngestRequestBody struct {
	Events []PostIngestRequestBodyEvents `json:"events"`
}

// PostIngest200ApplicationJSONDebug
// Optional debug information (only present when debug=true is passed to the endpoint). Contains ingested and duplicate event idempotency keys.
type PostIngest200ApplicationJSONDebug struct {
	Duplicate []string `json:"duplicate,omitempty"`
	Ingested  []string `json:"ingested,omitempty"`
}

type PostIngest200ApplicationJSONValidationFailed struct {
	IdempotencyKey   *string                  `json:"idempotency_key,omitempty"`
	ValidationErrors []map[string]interface{} `json:"validation_errors,omitempty"`
}

type PostIngest200ApplicationJSON struct {
	Debug            *PostIngest200ApplicationJSONDebug             `json:"debug,omitempty"`
	ValidationFailed []PostIngest200ApplicationJSONValidationFailed `json:"validation_failed"`
}

// PostIngest400ApplicationJSONDebug
// Optional debug information (only present when debug=true is passed to the endpoint). Contains ingested and duplicate event idempotency keys.
type PostIngest400ApplicationJSONDebug struct {
	Duplicate []string `json:"duplicate,omitempty"`
	Ingested  []string `json:"ingested,omitempty"`
}

type PostIngest400ApplicationJSONValidationFailed struct {
	IdempotencyKey   *string  `json:"idempotency_key,omitempty"`
	ValidationErrors []string `json:"validation_errors,omitempty"`
}

type PostIngest400ApplicationJSON struct {
	Debug            *PostIngest400ApplicationJSONDebug             `json:"debug,omitempty"`
	ValidationFailed []PostIngest400ApplicationJSONValidationFailed `json:"validation_failed"`
}

type PostIngestRequest struct {
	QueryParams PostIngestQueryParams
	Request     *PostIngestRequestBody `request:"mediaType=application/json"`
}

type PostIngestResponse struct {
	ContentType                        string
	StatusCode                         int64
	PostIngest200ApplicationJSONObject *PostIngest200ApplicationJSON
	PostIngest400ApplicationJSONObject *PostIngest400ApplicationJSON
}
