import dataclasses
import dateutil.parser
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional


@dataclass_json
@dataclasses.dataclass
class Coupon:
    r"""Coupon
    A coupon represents a reusable discount configuration, and have an attached redemption code that can be issued to your end users. Coupons are most often used in self-serve signup or upgrade flows in your checkout experience or billing portal.
    
    To redeem a coupon, pass the `redemption_code` property in the [create subscription](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription) or [schedule plan change](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription-schedule-plan-change) request. 
    
    """
    
    discount: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    redemption_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemption_code') }})
    archived_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration_in_months: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_in_months') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_redemptions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_redemptions') }})
    times_redeemed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('times_redeemed') }})
    

@dataclass_json
@dataclasses.dataclass
class CouponInput:
    r"""CouponInput
    A coupon represents a reusable discount configuration, and have an attached redemption code that can be issued to your end users. Coupons are most often used in self-serve signup or upgrade flows in your checkout experience or billing portal.
    
    To redeem a coupon, pass the `redemption_code` property in the [create subscription](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription) or [schedule plan change](https://docs.withorb.com/docs/orb-docs/api-reference/operations/create-a-subscription-schedule-plan-change) request. 
    
    """
    
    discount: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    redemption_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemption_code') }})
    duration_in_months: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_in_months') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_redemptions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_redemptions') }})
    times_redeemed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('times_redeemed') }})
    