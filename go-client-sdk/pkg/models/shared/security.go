package shared

type SchemeVesselAPIToken struct {
	APIKey string `security:"name=vessel-api-token"`
}

type Security struct {
	VesselAPIToken SchemeVesselAPIToken `security:"scheme,type=apiKey,subtype=header"`
}
