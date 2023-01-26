package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
)

type PostCouponsRequest struct {
	Request *shared.CouponInput `request:"mediaType=application/json"`
}

type PostCouponsResponse struct {
	ContentType string
	StatusCode  int64
}
