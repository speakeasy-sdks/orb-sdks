from __future__ import annotations
import dataclasses
from ..shared import coupon as shared_coupon
from typing import Optional


@dataclasses.dataclass
class PostCouponsRequest:
    request: Optional[shared_coupon.CouponInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCouponsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    