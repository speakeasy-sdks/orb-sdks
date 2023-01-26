import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from orbapi import utils


@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDSchedulePathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDSchedule200ApplicationJSONDataPlan:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDSchedule200ApplicationJSONData:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    plan: Optional[GetSubscriptionsSubscriptionIDSchedule200ApplicationJSONDataPlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDSchedule200ApplicationJSON:
    data: Optional[list[GetSubscriptionsSubscriptionIDSchedule200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDScheduleRequest:
    path_params: GetSubscriptionsSubscriptionIDSchedulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_subscriptions_subscription_id_schedule_200_application_json_object: Optional[GetSubscriptionsSubscriptionIDSchedule200ApplicationJSON] = dataclasses.field(default=None)
    
