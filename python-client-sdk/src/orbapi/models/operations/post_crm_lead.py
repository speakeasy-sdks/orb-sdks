import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import leadcreate as shared_leadcreate


@dataclass_json
@dataclasses.dataclass
class PostCrmLeadRequestBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    lead: shared_leadcreate.LeadCreate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lead') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCrmLeadResponseBody:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class PostCrmLeadRequest:
    request: Optional[PostCrmLeadRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCrmLeadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PostCrmLeadResponseBody] = dataclasses.field(default=None)
    
