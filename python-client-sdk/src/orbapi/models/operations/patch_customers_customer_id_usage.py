import dataclasses
import dateutil.parser
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class PatchCustomersCustomerIDUsagePathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchCustomersCustomerIDUsageQueryParams:
    timeframe_end: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'timeframe_end', 'style': 'form', 'explode': True }})
    timeframe_start: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'timeframe_start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PatchCustomersCustomerIDUsageRequestBodyEvents:
    event_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_name') }})
    properties: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    timestamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchCustomersCustomerIDUsageRequestBody:
    events: list[PatchCustomersCustomerIDUsageRequestBodyEvents] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclasses.dataclass
class PatchCustomersCustomerIDUsageRequest:
    path_params: PatchCustomersCustomerIDUsagePathParams = dataclasses.field()
    query_params: PatchCustomersCustomerIDUsageQueryParams = dataclasses.field()
    request: Optional[PatchCustomersCustomerIDUsageRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclasses.dataclass
class PatchCustomersCustomerIDUsage400ApplicationJSONValidationErrors:
    idempotency_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    validation_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchCustomersCustomerIDUsage400ApplicationJSON:
    status: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    validation_errors: list[PatchCustomersCustomerIDUsage400ApplicationJSONValidationErrors] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchCustomersCustomerIDUsage200ApplicationJSON:
    duplicate: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate') }})
    ingested: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingested') }})
    

@dataclasses.dataclass
class PatchCustomersCustomerIDUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_customers_customer_id_usage_200_application_json_object: Optional[PatchCustomersCustomerIDUsage200ApplicationJSON] = dataclasses.field(default=None)
    patch_customers_customer_id_usage_400_application_json_object: Optional[PatchCustomersCustomerIDUsage400ApplicationJSON] = dataclasses.field(default=None)
    