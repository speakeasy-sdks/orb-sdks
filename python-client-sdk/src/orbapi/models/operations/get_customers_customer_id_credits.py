from __future__ import annotations
import dataclasses
import dateutil.parser
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from orbapi import utils
from typing import Optional


@dataclasses.dataclass
class GetCustomersCustomerIDCreditsPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomersCustomerIDCreditsRequest:
    path_params: GetCustomersCustomerIDCreditsPathParams = dataclasses.field()
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetCustomersCustomerIDCredits200ApplicationJSONData:
    balance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    expiry_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    per_unit_cost_basis: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_unit_cost_basis') }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetCustomersCustomerIDCredits200ApplicationJSONPaginationMetadata:
    has_more: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_more') }})
    next_cursor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_cursor'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetCustomersCustomerIDCredits200ApplicationJSON:
    data: list[GetCustomersCustomerIDCredits200ApplicationJSONData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: GetCustomersCustomerIDCredits200ApplicationJSONPaginationMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetCustomersCustomerIDCreditsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_customers_customer_id_credits_200_application_json_object: Optional[GetCustomersCustomerIDCredits200ApplicationJSON] = dataclasses.field(default=None)
    