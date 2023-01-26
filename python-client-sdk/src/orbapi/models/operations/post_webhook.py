import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import webhookmetadatacreate as shared_webhookmetadatacreate
from ..shared import webhookmetadata as shared_webhookmetadata


@dataclass_json
@dataclasses.dataclass
class PostWebhookRequestBody:
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    webhook: Optional[shared_webhookmetadatacreate.WebhookMetadataCreate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    

@dataclass_json
@dataclasses.dataclass
class PostWebhookResponseBody:
    webhook: Optional[shared_webhookmetadata.WebhookMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    

@dataclasses.dataclass
class PostWebhookRequest:
    request: Optional[PostWebhookRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[PostWebhookResponseBody] = dataclasses.field(default=None)
    
