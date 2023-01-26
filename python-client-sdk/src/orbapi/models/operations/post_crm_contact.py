import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import contactcreate as shared_contactcreate


@dataclass_json
@dataclasses.dataclass
class PostCrmContactRequestBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    contact: shared_contactcreate.ContactCreate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCrmContactResponseBody:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class PostCrmContactRequest:
    request: Optional[PostCrmContactRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCrmContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PostCrmContactResponseBody] = dataclasses.field(default=None)
    
