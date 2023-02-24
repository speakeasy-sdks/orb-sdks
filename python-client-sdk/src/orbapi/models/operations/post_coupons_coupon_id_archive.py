from __future__ import annotations
import dataclasses
from ..shared import coupon as shared_coupon
from typing import Optional


@dataclasses.dataclass
class PostCouponsCouponIDArchivePathParams:
    coupon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'coupon_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCouponsCouponIDArchiveRequest:
    path_params: PostCouponsCouponIDArchivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostCouponsCouponIDArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    coupon: Optional[shared_coupon.Coupon] = dataclasses.field(default=None)
    