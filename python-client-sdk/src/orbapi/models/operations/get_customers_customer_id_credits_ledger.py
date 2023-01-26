import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import credit_ledger_entry as shared_credit_ledger_entry


@dataclasses.dataclass
class GetCustomersCustomerIDCreditsLedgerPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    
class GetCustomersCustomerIDCreditsLedgerEntryStatusEnum(str, Enum):
    COMMITTED = "committed"
    PENDING = "pending"

class GetCustomersCustomerIDCreditsLedgerEntryTypeEnum(str, Enum):
    INCREMENT = "increment"
    DECREMENT = "decrement"
    EXPIRATION_CHANGE = "expiration_change"
    CREDIT_BLOCK_EXPIRY = "credit_block_expiry"


@dataclasses.dataclass
class GetCustomersCustomerIDCreditsLedgerQueryParams:
    entry_status: Optional[GetCustomersCustomerIDCreditsLedgerEntryStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entry_status', 'style': 'form', 'explode': True }})
    entry_type: Optional[GetCustomersCustomerIDCreditsLedgerEntryTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entry_type', 'style': 'form', 'explode': True }})
    minimum_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minimum_amount', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetCustomersCustomerIDCreditsLedger200ApplicationJSONPaginationMetadata:
    has_more: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_more') }})
    next_cursor: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_cursor') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCustomersCustomerIDCreditsLedger200ApplicationJSON:
    data: list[shared_credit_ledger_entry.CreditLedgerEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: GetCustomersCustomerIDCreditsLedger200ApplicationJSONPaginationMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetCustomersCustomerIDCreditsLedgerRequest:
    path_params: GetCustomersCustomerIDCreditsLedgerPathParams = dataclasses.field()
    query_params: GetCustomersCustomerIDCreditsLedgerQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomersCustomerIDCreditsLedgerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_customers_customer_id_credits_ledger_200_application_json_object: Optional[GetCustomersCustomerIDCreditsLedger200ApplicationJSON] = dataclasses.field(default=None)
    
