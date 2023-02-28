from __future__ import annotations
import dataclasses
from ..shared import coupon as shared_coupon
from dataclasses_json import Undefined, dataclass_json
from orbapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class GetCouponsQueryParams:
    redemption_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'redemption_code', 'style': 'form', 'explode': True }})
    show_archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'show_archived', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCouponsRequest:
    query_params: GetCouponsQueryParams = dataclasses.field()
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetCoupons200ApplicationJSON:
    data: Optional[list[shared_coupon.Coupon]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data'), 'exclude': lambda f: f is None }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class GetCouponsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_coupons_200_application_json_object: Optional[GetCoupons200ApplicationJSON] = dataclasses.field(default=None)
    