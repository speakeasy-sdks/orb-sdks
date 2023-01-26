import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import webhookmetadata as shared_webhookmetadata


@dataclasses.dataclass
class GetOneWebhookQueryParams:
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    webhook_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'webhookId', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetOneWebhookResponseBody:
    webhook: Optional[shared_webhookmetadata.WebhookMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    

@dataclasses.dataclass
class GetOneWebhookRequest:
    query_params: GetOneWebhookQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetOneWebhookResponseBody] = dataclasses.field(default=None)
    
