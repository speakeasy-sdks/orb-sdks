from __future__ import annotations
import dataclasses
from ..shared import subscription as shared_subscription
from dataclasses_json import Undefined, dataclass_json
from orbapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class GetSubscriptionsByCouponIDPathParams:
    coupon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'coupon_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionsByCouponIDRequest:
    path_params: GetSubscriptionsByCouponIDPathParams = dataclasses.field()
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetSubscriptionsByCouponID200ApplicationJSON:
    data: Optional[list[shared_subscription.Subscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data'), 'exclude': lambda f: f is None }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class GetSubscriptionsByCouponIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_subscriptions_by_coupon_id_200_application_json_object: Optional[GetSubscriptionsByCouponID200ApplicationJSON] = dataclasses.field(default=None)
    