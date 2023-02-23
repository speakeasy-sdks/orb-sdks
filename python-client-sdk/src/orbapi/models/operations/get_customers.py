import dataclasses
from ..shared import customer as shared_customer
from dataclasses_json import dataclass_json
from orbapi import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class GetCustomers200ApplicationJSONPaginationMetadata:
    has_more: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_more') }})
    next_cursor: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_cursor') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCustomers200ApplicationJSON:
    data: list[shared_customer.Customer] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: GetCustomers200ApplicationJSONPaginationMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetCustomersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_customers_200_application_json_object: Optional[GetCustomers200ApplicationJSON] = dataclasses.field(default=None)
    