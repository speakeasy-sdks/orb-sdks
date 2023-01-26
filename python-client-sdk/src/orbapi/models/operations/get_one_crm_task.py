import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import task as shared_task


@dataclasses.dataclass
class GetOneCrmTaskQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    all_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allFields', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetOneCrmTaskResponseBody:
    task: Optional[shared_task.Task] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    

@dataclasses.dataclass
class GetOneCrmTaskRequest:
    query_params: GetOneCrmTaskQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneCrmTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetOneCrmTaskResponseBody] = dataclasses.field(default=None)
    
