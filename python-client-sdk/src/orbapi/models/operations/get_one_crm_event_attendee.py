import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import eventattendee as shared_eventattendee


@dataclasses.dataclass
class GetOneCrmEventAttendeeQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    all_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allFields', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetOneCrmEventAttendeeResponseBody:
    event_attendee: Optional[shared_eventattendee.EventAttendee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventAttendee') }})
    

@dataclasses.dataclass
class GetOneCrmEventAttendeeRequest:
    query_params: GetOneCrmEventAttendeeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneCrmEventAttendeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetOneCrmEventAttendeeResponseBody] = dataclasses.field(default=None)
    
