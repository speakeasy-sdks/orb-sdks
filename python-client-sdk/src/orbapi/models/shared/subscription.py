import dataclasses
import dateutil.parser
from ..shared import customer as shared_customer
from ..shared import plan as shared_plan
from dataclasses_json import dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from orbapi import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class SubscriptionFixedFeeQuantitySchedule:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    price_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_id') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscriptionRedeemedCoupon:
    coupon_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coupon_id') }})
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class SubscriptionStatusEnum(str, Enum):
    ACTIVE = "active"
    ENDED = "ended"
    UPCOMING = "upcoming"


@dataclass_json
@dataclasses.dataclass
class Subscription:
    r"""Subscription
    A subscription represents the purchase of a plan by a customer.
    
    By default, subscriptions begin on the day that they're created and renew automatically for each billing cycle at the cadence that's configured in the plan definition.
    
    Subscriptions also default to **beginning of month alignment**, which means the first invoice issued for the subscription will have pro-rated charges between the `start_date` and the first of the following month. Subsequent billing periods will always start and end on a month boundary (e.g. subsequent month starts for monthly billing).
    
    Depending on the plan configuration, any _flat_ recurring fees will be billed either at the beginning (in-advance) or end (in-arrears) of each billing cycle. Plans default to **in-advance billing**. Usage-based fees are billed in arrears as usage is accumulated. In the normal course of events, you can expect an invoice to contain usage-based charges for the previous period, and a recurring fee for the following period.
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer: shared_customer.Customer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    end_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fixed_fee_quantity_schedule: list[SubscriptionFixedFeeQuantitySchedule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_fee_quantity_schedule') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    plan: shared_plan.Plan = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    start_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: SubscriptionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    active_plan_phase_order: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_plan_phase_order') }})
    auto_collection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_collection') }})
    current_billing_period_end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_billing_period_end_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_billing_period_start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_billing_period_start_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_invoice_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_invoice_memo') }})
    net_terms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_terms') }})
    redeemed_coupon: Optional[SubscriptionRedeemedCoupon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redeemed_coupon') }})
    