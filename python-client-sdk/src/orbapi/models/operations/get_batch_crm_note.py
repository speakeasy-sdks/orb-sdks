import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import note as shared_note


@dataclasses.dataclass
class GetBatchCrmNoteQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    all_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allFields', 'style': 'form', 'explode': True }})
    ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetBatchCrmNoteResponseBody:
    invalid_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalidIds') }})
    notes: Optional[list[shared_note.Note]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    

@dataclasses.dataclass
class GetBatchCrmNoteRequest:
    query_params: GetBatchCrmNoteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBatchCrmNoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetBatchCrmNoteResponseBody] = dataclasses.field(default=None)
    
