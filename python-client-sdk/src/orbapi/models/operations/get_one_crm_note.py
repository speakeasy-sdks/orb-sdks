import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import note as shared_note


@dataclasses.dataclass
class GetOneCrmNoteQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    all_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allFields', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetOneCrmNoteResponseBody:
    note: Optional[shared_note.Note] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    

@dataclasses.dataclass
class GetOneCrmNoteRequest:
    query_params: GetOneCrmNoteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneCrmNoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetOneCrmNoteResponseBody] = dataclasses.field(default=None)
    
