import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import eventattendeecreate as shared_eventattendeecreate


@dataclass_json
@dataclasses.dataclass
class PostCrmEventAttendeeResponseBody:
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    event_attendee: Optional[shared_eventattendeecreate.EventAttendeeCreate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventAttendee') }})
    

@dataclasses.dataclass
class PostCrmEventAttendeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PostCrmEventAttendeeResponseBody] = dataclasses.field(default=None)
    