package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PutCrmContactApplicationJSON struct {
	AccessToken string               `json:"accessToken"`
	Contact     shared.ContactUpdate `json:"contact"`
	ID          string               `json:"id"`
}

type PutCrmContactRequests struct {
	ApplicationXML []byte                        `request:"mediaType=application/xml"`
	Object         *PutCrmContactApplicationJSON `request:"mediaType=application/json"`
}

type PutCrmContactResponseBody struct {
	ID string `json:"id"`
}

type PutCrmContactRequest struct {
	Request *PutCrmContactRequests
}

type PutCrmContactResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *PutCrmContactResponseBody
}
