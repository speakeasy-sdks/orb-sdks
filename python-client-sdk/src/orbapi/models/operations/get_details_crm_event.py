import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import field as shared_field


@dataclasses.dataclass
class GetDetailsCrmEventQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    all_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allFields', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDetailsCrmEventResponseBody:
    fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    next_page_cursor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageCursor') }})
    

@dataclasses.dataclass
class GetDetailsCrmEventRequest:
    query_params: GetDetailsCrmEventQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDetailsCrmEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetDetailsCrmEventResponseBody] = dataclasses.field(default=None)
    