from __future__ import annotations
import dataclasses
import dateutil.parser
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from orbapi import utils

class CustomerBalanceTransactionActionEnum(str, Enum):
    APPLIED_TO_INVOICE = "applied_to_invoice"
    PRORATED_REFUND = "prorated_refund"
    MANUAL_ADJUSTMENT = "manual_adjustment"


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CustomerBalanceTransactionInvoice:
    r"""CustomerBalanceTransactionInvoice
    The Invoice associated with this transaction
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CustomerBalanceTransaction:
    r"""CustomerBalanceTransaction
    A single change to the customer balance. All amounts are in the customer's currency.
    """
    
    action: CustomerBalanceTransactionActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ending_balance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ending_balance') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoice: CustomerBalanceTransactionInvoice = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice') }})
    starting_balance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starting_balance') }})
    