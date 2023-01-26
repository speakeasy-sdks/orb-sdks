import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import dealupdate as shared_dealupdate


@dataclass_json
@dataclasses.dataclass
class PutCrmDealRequestBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    deal: shared_dealupdate.DealUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PutCrmDealResponseBody:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class PutCrmDealRequest:
    request: Optional[PutCrmDealRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCrmDealResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PutCrmDealResponseBody] = dataclasses.field(default=None)
    
