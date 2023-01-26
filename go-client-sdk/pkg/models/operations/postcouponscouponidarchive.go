package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
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
	StatusCode  int64
}
