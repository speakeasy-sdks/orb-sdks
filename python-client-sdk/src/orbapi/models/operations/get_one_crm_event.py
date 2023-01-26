import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import event as shared_event


@dataclasses.dataclass
class GetOneCrmEventQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    all_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allFields', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetOneCrmEventResponseBody:
    event: Optional[shared_event.Event] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    

@dataclasses.dataclass
class GetOneCrmEventRequest:
    query_params: GetOneCrmEventQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneCrmEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetOneCrmEventResponseBody] = dataclasses.field(default=None)
    
