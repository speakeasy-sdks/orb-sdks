import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils


@dataclass_json
@dataclasses.dataclass
class WebhookMetadataCreate:
    r"""WebhookMetadataCreate
    Information describing a webhook
    """
    
    webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookUrl') }})
    
