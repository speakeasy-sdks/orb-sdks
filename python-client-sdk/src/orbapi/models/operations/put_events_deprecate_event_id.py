import dataclasses
from dataclasses_json import dataclass_json
from orbapi import utils
from typing import Optional


@dataclasses.dataclass
class PutEventsDeprecateEventIDPathParams:
    event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEventsDeprecateEventIDRequest:
    path_params: PutEventsDeprecateEventIDPathParams = dataclasses.field()
    

@dataclass_json
@dataclasses.dataclass
class PutEventsDeprecateEventID400ApplicationJSON:
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    validation_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutEventsDeprecateEventID200ApplicationJSON:
    deprecated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    

@dataclasses.dataclass
class PutEventsDeprecateEventIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_events_deprecate_event_id_200_application_json_object: Optional[PutEventsDeprecateEventID200ApplicationJSON] = dataclasses.field(default=None)
    put_events_deprecate_event_id_400_application_json_object: Optional[PutEventsDeprecateEventID400ApplicationJSON] = dataclasses.field(default=None)
    