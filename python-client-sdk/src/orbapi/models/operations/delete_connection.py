import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class DeleteConnectionRequestBody:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    

@dataclasses.dataclass
class DeleteConnectionSecurity:
    vessel_api_token: shared_security.SchemeVesselAPIToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteConnectionRequest:
    security: DeleteConnectionSecurity = dataclasses.field()
    request: Optional[DeleteConnectionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
