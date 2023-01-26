package shared

type AccountCreate struct {
	Additional        map[string]interface{} `json:"additional,omitempty"`
	Address           *Address               `json:"address,omitempty"`
	AnnualRevenue     *float64               `json:"annualRevenue,omitempty"`
	Description       *string                `json:"description,omitempty"`
	Industry          *string                `json:"industry,omitempty"`
	Name              string                 `json:"name"`
	NumberOfEmployees *float64               `json:"numberOfEmployees,omitempty"`
	Phone             *string                `json:"phone,omitempty"`
	Website           *string                `json:"website,omitempty"`
}
