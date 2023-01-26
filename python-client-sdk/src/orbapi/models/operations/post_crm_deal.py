import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import dealcreate as shared_dealcreate


@dataclass_json
@dataclasses.dataclass
class PostCrmDealRequestBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    deal: shared_dealcreate.DealCreate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCrmDealResponseBody:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class PostCrmDealRequest:
    request: Optional[PostCrmDealRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCrmDealResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PostCrmDealResponseBody] = dataclasses.field(default=None)
    
