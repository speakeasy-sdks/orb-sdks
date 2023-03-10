import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import credit_ledger_entry as shared_credit_ledger_entry


@dataclasses.dataclass
class PostCustomersCustomerIDCreditsLedgerEntryPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    
class PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnum(str, Enum):
    INCREMENT = "increment"
    DECREMENT = "decrement"
    EXPIRATION_CHANGE = "expiration_change"


@dataclass_json
@dataclasses.dataclass
class PostCustomersCustomerIDCreditsLedgerEntryRequestBodyInvoiceSettings:
    r"""PostCustomersCustomerIDCreditsLedgerEntryRequestBodyInvoiceSettings
    Passing `invoice_settings` automatically generates an invoice for the newly added credits. If `invoice_settings` is passed, you must specify `per_unit_cost_basis`, as the calculation of the invoice total is done on that basis.
    """
    
    auto_collection: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_collection') }})
    net_terms: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_terms') }})
    memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCustomersCustomerIDCreditsLedgerEntryRequestBody:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    entry_type: PostCustomersCustomerIDCreditsLedgerEntryRequestBodyEntryTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_type') }})
    block_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_id') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expiry_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_settings: Optional[PostCustomersCustomerIDCreditsLedgerEntryRequestBodyInvoiceSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_settings') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    per_unit_cost_basis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_unit_cost_basis') }})
    target_expiry_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_expiry_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclasses.dataclass
class PostCustomersCustomerIDCreditsLedgerEntryRequest:
    path_params: PostCustomersCustomerIDCreditsLedgerEntryPathParams = dataclasses.field()
    request: Optional[PostCustomersCustomerIDCreditsLedgerEntryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCustomersCustomerIDCreditsLedgerEntryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credit_ledger_entry: Optional[shared_credit_ledger_entry.CreditLedgerEntry] = dataclasses.field(default=None)
    
