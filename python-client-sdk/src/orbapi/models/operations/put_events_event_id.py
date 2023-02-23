import dataclasses
import dateutil.parser
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class PutEventsEventIDPathParams:
    event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutEventsEventIDRequestBody:
    event_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_name') }})
    properties: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id') }})
    

@dataclasses.dataclass
class PutEventsEventIDRequest:
    path_params: PutEventsEventIDPathParams = dataclasses.field()
    request: Optional[PutEventsEventIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclasses.dataclass
class PutEventsEventID400ApplicationJSON:
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    validation_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutEventsEventID200ApplicationJSON:
    amended: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amended') }})
    

@dataclasses.dataclass
class PutEventsEventIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_events_event_id_200_application_json_object: Optional[PutEventsEventID200ApplicationJSON] = dataclasses.field(default=None)
    put_events_event_id_400_application_json_object: Optional[PutEventsEventID400ApplicationJSON] = dataclasses.field(default=None)
    