import dataclasses
import dateutil.parser
from ..shared import subscription as shared_subscription
from dataclasses_json import dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from orbapi import utils
from typing import Optional


@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDCancelPathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    
class PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnum(str, Enum):
    IMMEDIATE = "immediate"
    END_OF_SUBSCRIPTION_TERM = "end_of_subscription_term"
    REQUESTED_DATE = "requested_date"


@dataclass_json
@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDCancelRequestBody:
    cancel_option: PostSubscriptionsSubscriptionIDCancelRequestBodyCancelOptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_option') }})
    cancellation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellation_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDCancelRequest:
    path_params: PostSubscriptionsSubscriptionIDCancelPathParams = dataclasses.field()
    request: Optional[PostSubscriptionsSubscriptionIDCancelRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDCancelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription: Optional[shared_subscription.Subscription] = dataclasses.field(default=None)
    