from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import subscription as shared_subscription
from dataclasses_json import Undefined, dataclass_json
from datetime import date
from marshmallow import fields
from orbapi import utils
from typing import Optional


@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityPathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityRequestBody:
    price_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_id') }})
    quantity: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effective_date'), 'encoder': utils.dateisoformat(True), 'decoder': utils.datefromisoformat, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityRequest:
    path_params: PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityPathParams = dataclasses.field()
    request: Optional[PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription: Optional[shared_subscription.Subscription] = dataclasses.field(default=None)
    