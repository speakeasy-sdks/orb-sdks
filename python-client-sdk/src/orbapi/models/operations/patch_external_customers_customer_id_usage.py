import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from orbapi import utils


@dataclasses.dataclass
class PatchExternalCustomersCustomerIDUsagePathParams:
    external_customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_customer_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchExternalCustomersCustomerIDUsageQueryParams:
    timeframe_end: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'timeframe_end', 'style': 'form', 'explode': True }})
    timeframe_start: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'timeframe_start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PatchExternalCustomersCustomerIDUsageRequestBodyEvents:
    event_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_name') }})
    properties: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    timestamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchExternalCustomersCustomerIDUsageRequestBody:
    events: list[PatchExternalCustomersCustomerIDUsageRequestBodyEvents] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchExternalCustomersCustomerIDUsage200ApplicationJSON:
    duplicate: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate') }})
    ingested: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingested') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchExternalCustomersCustomerIDUsage400ApplicationJSONValidationErrors:
    idempotency_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    validation_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchExternalCustomersCustomerIDUsage400ApplicationJSON:
    status: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    validation_errors: list[PatchExternalCustomersCustomerIDUsage400ApplicationJSONValidationErrors] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_errors') }})
    

@dataclasses.dataclass
class PatchExternalCustomersCustomerIDUsageRequest:
    path_params: PatchExternalCustomersCustomerIDUsagePathParams = dataclasses.field()
    query_params: PatchExternalCustomersCustomerIDUsageQueryParams = dataclasses.field()
    request: Optional[PatchExternalCustomersCustomerIDUsageRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchExternalCustomersCustomerIDUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_external_customers_customer_id_usage_200_application_json_object: Optional[PatchExternalCustomersCustomerIDUsage200ApplicationJSON] = dataclasses.field(default=None)
    patch_external_customers_customer_id_usage_400_application_json_object: Optional[PatchExternalCustomersCustomerIDUsage400ApplicationJSON] = dataclasses.field(default=None)
    
