import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import accountcreate as shared_accountcreate


@dataclass_json
@dataclasses.dataclass
class PostCrmAccountRequestBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    account: shared_accountcreate.AccountCreate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCrmAccountResponseBody:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class PostCrmAccountRequest:
    request: Optional[PostCrmAccountRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCrmAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PostCrmAccountResponseBody] = dataclasses.field(default=None)
    
