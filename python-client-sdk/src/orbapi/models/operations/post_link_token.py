import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostLinkTokenSecurity:
    vessel_api_token: shared_security.SchemeVesselAPIToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostLinkTokenResponseBody:
    link_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkToken') }})
    

@dataclasses.dataclass
class PostLinkTokenRequest:
    security: PostLinkTokenSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostLinkTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PostLinkTokenResponseBody] = dataclasses.field(default=None)
    
