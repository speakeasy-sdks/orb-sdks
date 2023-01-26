import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import leadupdate as shared_leadupdate


@dataclass_json
@dataclasses.dataclass
class PutCrmLeadRequestBody:
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    lead: Optional[shared_leadupdate.LeadUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lead') }})
    

@dataclass_json
@dataclasses.dataclass
class PutCrmLeadResponseBody:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class PutCrmLeadRequest:
    request: Optional[PutCrmLeadRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCrmLeadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PutCrmLeadResponseBody] = dataclasses.field(default=None)
    
