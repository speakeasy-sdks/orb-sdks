from __future__ import annotations
import dataclasses
import dateutil.parser
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreditLedgerEntryCreditBlock:
    r"""CreditLedgerEntryCreditBlock
    Credit block that the entry affected
    """
    
    expiry_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry_date') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    per_unit_cost_basis: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_unit_cost_basis') }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreditLedgerEntryCustomer:
    external_customer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class CreditLedgerEntryEntryStatusEnum(str, Enum):
    COMMITTED = "committed"
    PENDING = "pending"

class CreditLedgerEntryEntryTypeEnum(str, Enum):
    INCREMENT = "increment"
    DECREMENT = "decrement"
    EXPIRATION_CHANGE = "expiration_change"
    CREDIT_BLOCK_EXPIRY = "credit_block_expiry"


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreditLedgerEntry:
    r"""CreditLedgerEntry
    A credit ledger entry is a single entry in the customer balance ledger. More details about working with real-time balances are [here](../docs/Pre-paid-plans.md).
    
    To support late and out-of-order event reporting, ledger entries are marked as either __committed_ or _pending_. Committed entries are finalized and will not change. Pending entries can be updated up until the event reporting grace period. 
    """
    
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credit_block: CreditLedgerEntryCreditBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credit_block') }})
    customer: CreditLedgerEntryCustomer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ending_balance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ending_balance') }})
    entry_status: CreditLedgerEntryEntryStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_status') }})
    entry_type: CreditLedgerEntryEntryTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_type') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ledger_sequence_number: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ledger_sequence_number') }})
    metadata: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    starting_balance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starting_balance') }})
    event_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_id'), 'exclude': lambda f: f is None }})
    price_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_id'), 'exclude': lambda f: f is None }})
    