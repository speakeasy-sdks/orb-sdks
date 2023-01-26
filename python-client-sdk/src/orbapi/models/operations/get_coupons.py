import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import coupon as shared_coupon


@dataclasses.dataclass
class GetCouponsQueryParams:
    redemption_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'redemption_code', 'style': 'form', 'explode': True }})
    show_archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'show_archived', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetCoupons200ApplicationJSON:
    data: Optional[list[shared_coupon.Coupon]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetCouponsRequest:
    query_params: GetCouponsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCouponsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_coupons_200_application_json_object: Optional[GetCoupons200ApplicationJSON] = dataclasses.field(default=None)
    
