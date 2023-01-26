package operations

type GetPing200ApplicationJSON struct {
	Response string `json:"response"`
}

type GetPingResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetPing200ApplicationJSONObject *GetPing200ApplicationJSON
}
