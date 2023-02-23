import dataclasses
from dataclasses_json import dataclass_json
from orbapi import utils
from typing import Any, Optional


@dataclass_json
@dataclasses.dataclass
class Event:
    customer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    event_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_name') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    properties: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    timestamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id') }})
    