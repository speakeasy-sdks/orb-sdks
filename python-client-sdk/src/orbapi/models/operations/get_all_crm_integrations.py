import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import integration as shared_integration


@dataclass_json
@dataclasses.dataclass
class GetAllCrmIntegrationsResponseBody:
    integrations: Optional[list[shared_integration.Integration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrations') }})
    

@dataclasses.dataclass
class GetAllCrmIntegrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetAllCrmIntegrationsResponseBody] = dataclasses.field(default=None)
    
