package shared

type ConnectionIntegrationIDEnum string

const (
	ConnectionIntegrationIDEnumSalesforce ConnectionIntegrationIDEnum = "salesforce"
	ConnectionIntegrationIDEnumHubspot    ConnectionIntegrationIDEnum = "hubspot"
	ConnectionIntegrationIDEnumPipedrive  ConnectionIntegrationIDEnum = "pipedrive"
)

type ConnectionStatusEnum string

const (
	ConnectionStatusEnumNewConnection ConnectionStatusEnum = "NEW_CONNECTION"
	ConnectionStatusEnumInitialSync   ConnectionStatusEnum = "INITIAL_SYNC"
	ConnectionStatusEnumReady         ConnectionStatusEnum = "READY"
)

type Connection struct {
	ConnectionID     *string                      `json:"connectionId,omitempty"`
	CreatedTime      *string                      `json:"createdTime,omitempty"`
	IntegrationID    *ConnectionIntegrationIDEnum `json:"integrationId,omitempty"`
	LastActivityDate *string                      `json:"lastActivityDate,omitempty"`
	NativeOrgURL     *string                      `json:"nativeOrgURL,omitempty"`
	Status           *ConnectionStatusEnum        `json:"status,omitempty"`
}
