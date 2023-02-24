from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import subscription as shared_subscription
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDSchedulePlanChangePathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    
class PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnum(str, Enum):
    REQUESTED_DATE = "requested_date"
    END_OF_SUBSCRIPTION_TERM = "end_of_subscription_term"
    IMMEDIATE = "immediate"


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBody:
    change_option: PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_option') }})
    align_billing_with_plan_change_date: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('align_billing_with_plan_change_date'), 'exclude': lambda f: f is None }})
    change_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    coupon_redemption_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coupon_redemption_code'), 'exclude': lambda f: f is None }})
    external_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_plan_id'), 'exclude': lambda f: f is None }})
    minimum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_amount'), 'exclude': lambda f: f is None }})
    plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_id'), 'exclude': lambda f: f is None }})
    price_overrides: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_overrides'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDSchedulePlanChangeRequest:
    path_params: PostSubscriptionsSubscriptionIDSchedulePlanChangePathParams = dataclasses.field()
    request: Optional[PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDSchedulePlanChangeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription: Optional[shared_subscription.Subscription] = dataclasses.field(default=None)
    