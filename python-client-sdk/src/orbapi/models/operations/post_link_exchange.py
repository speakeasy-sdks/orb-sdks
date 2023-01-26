import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class PostLinkExchangeRequestBody:
    public_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicToken') }})
    

@dataclasses.dataclass
class PostLinkExchangeSecurity:
    vessel_api_token: shared_security.SchemeVesselAPIToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class PostLinkExchangeResponseBodyIntegrationIDEnum(str, Enum):
    SALESFORCE = "salesforce"
    HUBSPOT = "hubspot"
    PIPEDRIVE = "pipedrive"


@dataclass_json
@dataclasses.dataclass
class PostLinkExchangeResponseBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    integration_id: PostLinkExchangeResponseBodyIntegrationIDEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationId') }})
    native_org_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeOrgId') }})
    native_org_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeOrgURL') }})
    

@dataclasses.dataclass
class PostLinkExchangeRequest:
    security: PostLinkExchangeSecurity = dataclasses.field()
    request: Optional[PostLinkExchangeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostLinkExchangeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PostLinkExchangeResponseBody] = dataclasses.field(default=None)
    
