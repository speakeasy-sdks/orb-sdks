from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from orbapi import utils
from typing import Any, Optional

class PostIngestDebugEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclasses.dataclass
class PostIngestQueryParams:
    debug: Optional[PostIngestDebugEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'debug', 'style': 'form', 'explode': True }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostIngestRequestBodyEvents:
    event_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_name') }})
    idempotency_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    properties: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    timestamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id'), 'exclude': lambda f: f is None }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostIngestRequestBody:
    events: list[PostIngestRequestBodyEvents] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclasses.dataclass
class PostIngestRequest:
    query_params: PostIngestQueryParams = dataclasses.field()
    request: Optional[PostIngestRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostIngest400ApplicationJSONDebug:
    r"""PostIngest400ApplicationJSONDebug
    Optional debug information (only present when debug=true is passed to the endpoint). Contains ingested and duplicate event idempotency keys.
    """
    
    duplicate: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate'), 'exclude': lambda f: f is None }})
    ingested: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingested'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostIngest400ApplicationJSONValidationFailed:
    idempotency_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key'), 'exclude': lambda f: f is None }})
    validation_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_errors'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostIngest400ApplicationJSON:
    validation_failed: list[PostIngest400ApplicationJSONValidationFailed] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_failed') }})
    debug: Optional[PostIngest400ApplicationJSONDebug] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debug'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostIngest200ApplicationJSONDebug:
    r"""PostIngest200ApplicationJSONDebug
    Optional debug information (only present when debug=true is passed to the endpoint). Contains ingested and duplicate event idempotency keys.
    """
    
    duplicate: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate'), 'exclude': lambda f: f is None }})
    ingested: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingested'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostIngest200ApplicationJSONValidationFailed:
    idempotency_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key'), 'exclude': lambda f: f is None }})
    validation_errors: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_errors'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostIngest200ApplicationJSON:
    validation_failed: list[PostIngest200ApplicationJSONValidationFailed] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_failed') }})
    debug: Optional[PostIngest200ApplicationJSONDebug] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debug'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class PostIngestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_ingest_200_application_json_object: Optional[PostIngest200ApplicationJSON] = dataclasses.field(default=None)
    post_ingest_400_application_json_object: Optional[PostIngest400ApplicationJSON] = dataclasses.field(default=None)
    