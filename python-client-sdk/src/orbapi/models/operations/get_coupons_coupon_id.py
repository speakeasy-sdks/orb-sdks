import dataclasses
from ..shared import coupon as shared_coupon
from typing import Optional


@dataclasses.dataclass
class GetCouponsCouponIDPathParams:
    coupon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'coupon_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCouponsCouponIDRequest:
    path_params: GetCouponsCouponIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCouponsCouponIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    coupon: Optional[shared_coupon.Coupon] = dataclasses.field(default=None)
    