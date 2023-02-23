import dataclasses
import dateutil.parser
from ..shared import customer_balance_transaction as shared_customer_balance_transaction
from ..shared import customer_tax_id as shared_customer_tax_id
from ..shared import price as shared_price
from dataclasses_json import dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional


@dataclass_json
@dataclasses.dataclass
class InvoiceAutoCollection:
    r"""InvoiceAutoCollection
    Information about payment auto-collection for this invoice.
    """
    
    next_attempt_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_attempt_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    previously_attempted_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previously_attempted_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class InvoiceCustomer:
    r"""InvoiceCustomer
    The customer receiving this invoice.
    """
    
    external_customer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class InvoiceLineItemsSubLineItemsGrouping:
    r"""InvoiceLineItemsSubLineItemsGrouping
    For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` will be the values for this particular grouping.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class InvoiceLineItemsSubLineItemsMatrixConfig:
    r"""InvoiceLineItemsSubLineItemsMatrixConfig
    Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
    """
    
    dimension_values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension_values') }})
    

@dataclass_json
@dataclasses.dataclass
class InvoiceLineItemsSubLineItemsTierConfig:
    r"""InvoiceLineItemsSubLineItemsTierConfig
    Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
    """
    
    first_unit: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_unit') }})
    last_unit: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_unit') }})
    unit_amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_amount') }})
    
class InvoiceLineItemsSubLineItemsTypeEnum(str, Enum):
    MATRIX = "matrix"
    TIER = "tier"


@dataclass_json
@dataclasses.dataclass
class InvoiceLineItemsSubLineItems:
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    grouping: InvoiceLineItemsSubLineItemsGrouping = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grouping') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    type: InvoiceLineItemsSubLineItemsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    matrix_config: Optional[InvoiceLineItemsSubLineItemsMatrixConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matrix_config') }})
    tier_config: Optional[InvoiceLineItemsSubLineItemsTierConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_config') }})
    

@dataclass_json
@dataclasses.dataclass
class InvoiceLineItemsTaxAmounts:
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    tax_rate_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate_description') }})
    tax_rate_percentage: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate_percentage') }})
    

@dataclass_json
@dataclasses.dataclass
class InvoiceLineItems:
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    discount: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    end_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    grouping: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grouping') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    minimum: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    price: shared_price.Price = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    quantity: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    start_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_line_items: list[InvoiceLineItemsSubLineItems] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_line_items') }})
    subtotal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotal') }})
    tax_amounts: list[InvoiceLineItemsTaxAmounts] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_amounts') }})
    
class InvoiceStatusEnum(str, Enum):
    ISSUED = "issued"
    PAID = "paid"
    SYNCED = "synced"
    VOID = "void"
    DRAFT = "draft"


@dataclass_json
@dataclasses.dataclass
class InvoiceSubscription:
    r"""InvoiceSubscription
    The associated subscription for this invoice.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class Invoice:
    r"""Invoice
    An [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice) is a fundamental billing entity, representing the request for payment for a single subscription. This includes a set of line items, which correspond to prices in the subscription's plan and can represent fixed recurring fees or usage-based fees. They are generated at the end of a billing period, or as the result of an action, such as a cancellation.
    """
    
    amount_due: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount_due') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    customer: InvoiceCustomer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    customer_balance_transactions: list[shared_customer_balance_transaction.CustomerBalanceTransaction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_balance_transactions') }})
    discount: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    due_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoice_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_pdf: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_pdf') }})
    line_items: list[InvoiceLineItems] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_items') }})
    minimum: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    status: InvoiceStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription: InvoiceSubscription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    subtotal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotal') }})
    total: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    auto_collection: Optional[InvoiceAutoCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_collection') }})
    customer_tax_id: Optional[shared_customer_tax_id.CustomerTaxID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_tax_id') }})
    hosted_invoice_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosted_invoice_url') }})
    issued_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issued_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    paid_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paid_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_issue_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_issue_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    voided_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voided_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    