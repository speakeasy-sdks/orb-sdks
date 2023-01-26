package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type GetCouponsQueryParams struct {
	RedemptionCode *string `queryParam:"style=form,explode=true,name=redemption_code"`
	ShowArchived   *bool   `queryParam:"style=form,explode=true,name=show_archived"`
}

type GetCoupons200ApplicationJSON struct {
	Data               []shared.Coupon        `json:"data,omitempty"`
	PaginationMetadata map[string]interface{} `json:"pagination_metadata,omitempty"`
}

type GetCouponsRequest struct {
	QueryParams GetCouponsQueryParams
}

type GetCouponsResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetCoupons200ApplicationJSONObject *GetCoupons200ApplicationJSON
}
