package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetOneCrmContactQueryParams struct {
	AccessToken string  `queryParam:"style=form,explode=true,name=accessToken"`
	AllFields   *bool   `queryParam:"style=form,explode=true,name=allFields"`
	Email       *string `queryParam:"style=form,explode=true,name=email"`
	ID          *string `queryParam:"style=form,explode=true,name=id"`
}

type GetOneCrmContactResponseBody struct {
	Contact *shared.Contact `json:"contact,omitempty"`
}

type GetOneCrmContactRequest struct {
	QueryParams GetOneCrmContactQueryParams
}

type GetOneCrmContactResponse struct {
	ContentType  string
	StatusCode   int64
	ResponseBody *GetOneCrmContactResponseBody
}
