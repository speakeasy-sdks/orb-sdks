package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCouponsCouponIDPathParams struct {
	CouponID string `pathParam:"style=simple,explode=false,name=coupon_id"`
}

type GetCouponsCouponIDRequest struct {
	PathParams GetCouponsCouponIDPathParams
}

type GetCouponsCouponIDResponse struct {
	ContentType string
	Coupon      *shared.Coupon
	StatusCode  int
}
