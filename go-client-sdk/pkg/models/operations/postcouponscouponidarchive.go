package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCouponsCouponIDArchivePathParams struct {
	CouponID string `pathParam:"style=simple,explode=false,name=coupon_id"`
}

type PostCouponsCouponIDArchiveRequest struct {
	PathParams PostCouponsCouponIDArchivePathParams
}

type PostCouponsCouponIDArchiveResponse struct {
	ContentType string
	Coupon      *shared.Coupon
	StatusCode  int
}
