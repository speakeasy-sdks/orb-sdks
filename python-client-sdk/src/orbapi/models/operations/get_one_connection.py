import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import connection as shared_connection


@dataclasses.dataclass
class GetOneConnectionQueryParams:
    connection_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'connectionId', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetOneConnectionResponseBody:
    connection: Optional[shared_connection.Connection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    

@dataclasses.dataclass
class GetOneConnectionRequest:
    query_params: GetOneConnectionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetOneConnectionResponseBody] = dataclasses.field(default=None)
    
