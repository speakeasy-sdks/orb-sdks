package operations

type PostCrmPassthroughRequestBodyMethodEnum string

const (
	PostCrmPassthroughRequestBodyMethodEnumGet    PostCrmPassthroughRequestBodyMethodEnum = "GET"
	PostCrmPassthroughRequestBodyMethodEnumPost   PostCrmPassthroughRequestBodyMethodEnum = "POST"
	PostCrmPassthroughRequestBodyMethodEnumPut    PostCrmPassthroughRequestBodyMethodEnum = "PUT"
	PostCrmPassthroughRequestBodyMethodEnumPatch  PostCrmPassthroughRequestBodyMethodEnum = "PATCH"
	PostCrmPassthroughRequestBodyMethodEnumDelete PostCrmPassthroughRequestBodyMethodEnum = "DELETE"
)

type PostCrmPassthroughRequestBody struct {
	AccessToken string                                  `json:"accessToken"`
	Body        map[string]interface{}                  `json:"body,omitempty"`
	Method      PostCrmPassthroughRequestBodyMethodEnum `json:"method"`
	Path        string                                  `json:"path"`
	Query       map[string]interface{}                  `json:"query,omitempty"`
}

type PostCrmPassthroughResponseBody struct {
	Body       *interface{}           `json:"body,omitempty"`
	Headers    map[string]interface{} `json:"headers,omitempty"`
	StatusCode *float64               `json:"statusCode,omitempty"`
	URL        *string                `json:"url,omitempty"`
}

type PostCrmPassthroughRequest struct {
	Request *PostCrmPassthroughRequestBody `request:"mediaType=application/json"`
}

type PostCrmPassthroughResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PostCrmPassthroughResponseBody
}
