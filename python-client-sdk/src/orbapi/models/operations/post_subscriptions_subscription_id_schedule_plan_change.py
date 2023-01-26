import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import subscription as shared_subscription


@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDSchedulePlanChangePathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    
class PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnum(str, Enum):
    REQUESTED_DATE = "requested_date"
    END_OF_SUBSCRIPTION_TERM = "end_of_subscription_term"
    IMMEDIATE = "immediate"


@dataclass_json
@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBody:
    change_option: PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBodyChangeOptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_option') }})
    align_billing_with_plan_change_date: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('align_billing_with_plan_change_date') }})
    change_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    coupon_redemption_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coupon_redemption_code') }})
    external_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_plan_id') }})
    minimum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_amount') }})
    plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_id') }})
    price_overrides: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_overrides') }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDSchedulePlanChangeRequest:
    path_params: PostSubscriptionsSubscriptionIDSchedulePlanChangePathParams = dataclasses.field()
    request: Optional[PostSubscriptionsSubscriptionIDSchedulePlanChangeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDSchedulePlanChangeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription: Optional[shared_subscription.Subscription] = dataclasses.field(default=None)
    
