package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCouponsQueryParams struct {
	RedemptionCode *string `queryParam:"style=form,explode=true,name=redemption_code"`
	ShowArchived   *bool   `queryParam:"style=form,explode=true,name=show_archived"`
}

type GetCouponsRequest struct {
	QueryParams GetCouponsQueryParams
}

type GetCoupons200ApplicationJSON struct {
	Data               []shared.Coupon        `json:"data,omitempty"`
	PaginationMetadata map[string]interface{} `json:"pagination_metadata,omitempty"`
}

type GetCouponsResponse struct {
	ContentType                        string
	StatusCode                         int
	GetCoupons200ApplicationJSONObject *GetCoupons200ApplicationJSON
}
