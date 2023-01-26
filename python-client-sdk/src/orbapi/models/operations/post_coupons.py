import dataclasses
from typing import Optional
from ..shared import coupon as shared_coupon


@dataclasses.dataclass
class PostCouponsRequest:
    request: Optional[shared_coupon.CouponInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCouponsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
