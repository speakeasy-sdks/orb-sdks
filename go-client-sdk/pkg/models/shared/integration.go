package shared

type IntegrationIntegrationIDEnum string

const (
	IntegrationIntegrationIDEnumSalesforce IntegrationIntegrationIDEnum = "salesforce"
	IntegrationIntegrationIDEnumHubspot    IntegrationIntegrationIDEnum = "hubspot"
	IntegrationIntegrationIDEnumPipedrive  IntegrationIntegrationIDEnum = "pipedrive"
)

type Integration struct {
	IconURL       *string                       `json:"iconURL,omitempty"`
	IntegrationID *IntegrationIntegrationIDEnum `json:"integrationId,omitempty"`
	Name          *string                       `json:"name,omitempty"`
}
