from __future__ import annotations
import dataclasses
import dateutil.parser
from dataclasses_json import Undefined, dataclass_json
from datetime import date, datetime
from enum import Enum
from marshmallow import fields
from orbapi import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpcomingPercent20InvoiceCustomer:
    r"""UpcomingPercent20InvoiceCustomer
    The customer receiving this invoice.
    """
    
    external_customer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpcomingPercent20InvoiceLineItemsGrouping:
    r"""UpcomingPercent20InvoiceLineItemsGrouping
    For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` and `subtotal` will be the values for this particular grouping.
    """
    
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig:
    r"""UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig
    Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
    """
    
    dimension_values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension_values') }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig:
    r"""UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig
    Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
    """
    
    first_unit: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_unit') }})
    last_unit: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_unit') }})
    unit_amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_amount') }})
    
class UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum(str, Enum):
    MATRIX = "matrix"
    TIER = "tier"


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpcomingPercent20InvoiceLineItemsSubLineItems:
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    type: UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    matrix_config: Optional[UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matrix_config'), 'exclude': lambda f: f is None }})
    tier_config: Optional[UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_config'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpcomingPercent20InvoiceLineItems:
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    end_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    grouping: UpcomingPercent20InvoiceLineItemsGrouping = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grouping') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    start_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_line_items: list[UpcomingPercent20InvoiceLineItemsSubLineItems] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_line_items') }})
    subtotal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotal') }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpcomingPercent20InvoiceSubscription:
    r"""UpcomingPercent20InvoiceSubscription
    The associated subscription for this invoice.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpcomingPercent20Invoice:
    r"""UpcomingPercent20Invoice
    Upcoming invoices contain a line-by-line breakdown of an upcoming amount due for a subscription, including incurred usage in the billing period as well as any recurring fees. 
    
    Although each line item will be invoiced on the `target_date`, each invoice line item may have distinct date ranges (e.g. for usage billed in arrears, the range may specify the current month whereas an in-advance recurring fees will be for the following month).
    
    Since an invoice resource has not been created for this upcoming invoice, this endpoint intentionally does not return an `id` field.
    """
    
    amount_due: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount_due') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    customer: UpcomingPercent20InvoiceCustomer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    hosted_invoice_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosted_invoice_url') }})
    line_items: list[UpcomingPercent20InvoiceLineItems] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_items') }})
    subscription: UpcomingPercent20InvoiceSubscription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    subtotal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotal') }})
    target_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_date'), 'encoder': utils.dateisoformat(False), 'decoder': utils.datefromisoformat, 'mm_field': fields.DateTime(format='iso') }})
    