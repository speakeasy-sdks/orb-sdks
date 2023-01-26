package shared

type AccountAssociations struct {
	ContactIds  []string `json:"contactIds"`
	DealIds     []string `json:"dealIds"`
	EventIds    []string `json:"eventIds"`
	LeadIds     []string `json:"leadIds"`
	NoteIds     []string `json:"noteIds"`
	OwnerUserID string   `json:"ownerUserId"`
	TaskIds     []string `json:"taskIds"`
}

// Account
// (Alias: company, organization) An organization involved with your business.
type Account struct {
	Additional        map[string]interface{} `json:"additional,omitempty"`
	Address           *Address               `json:"address,omitempty"`
	AnnualRevenue     *float64               `json:"annualRevenue,omitempty"`
	Associations      AccountAssociations    `json:"associations"`
	CreatedTime       string                 `json:"createdTime"`
	Description       *string                `json:"description,omitempty"`
	ID                string                 `json:"id"`
	Industry          *string                `json:"industry,omitempty"`
	ModifiedTime      string                 `json:"modifiedTime"`
	Name              *string                `json:"name,omitempty"`
	NativeID          string                 `json:"nativeId"`
	NumberOfEmployees *float64               `json:"numberOfEmployees,omitempty"`
	Phone             *string                `json:"phone,omitempty"`
	Website           *string                `json:"website,omitempty"`
}
