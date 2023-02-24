from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import subscription as shared_subscription
from dataclasses_json import Undefined, dataclass_json
from datetime import date
from enum import Enum
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional

class PostSubscriptionsApplicationJSONExternalMarketplaceEnum(str, Enum):
    GOOGLE = "google"
    AWS = "aws"
    AZURE = "azure"


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostSubscriptionsApplicationJSONPhaseOverrides:
    discount: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount'), 'exclude': lambda f: f is None }})
    minimum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_amount'), 'exclude': lambda f: f is None }})
    order: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostSubscriptionsApplicationJSON:
    align_billing_with_subscription_start_date: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('align_billing_with_subscription_start_date'), 'exclude': lambda f: f is None }})
    auto_collection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_collection'), 'exclude': lambda f: f is None }})
    coupon_redemption_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coupon_redemption_code'), 'exclude': lambda f: f is None }})
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id'), 'exclude': lambda f: f is None }})
    default_invoice_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_invoice_memo'), 'exclude': lambda f: f is None }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id'), 'exclude': lambda f: f is None }})
    external_marketplace: Optional[PostSubscriptionsApplicationJSONExternalMarketplaceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_marketplace'), 'exclude': lambda f: f is None }})
    external_marketplace_reporting_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_marketplace_reporting_id'), 'exclude': lambda f: f is None }})
    external_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_plan_id'), 'exclude': lambda f: f is None }})
    minimum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_amount'), 'exclude': lambda f: f is None }})
    net_terms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_terms'), 'exclude': lambda f: f is None }})
    phase_overrides: Optional[list[PostSubscriptionsApplicationJSONPhaseOverrides]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase_overrides'), 'exclude': lambda f: f is None }})
    plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_id'), 'exclude': lambda f: f is None }})
    price_overrides: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_overrides'), 'exclude': lambda f: f is None }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.dateisoformat(True), 'decoder': utils.datefromisoformat, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class PostSubscriptionsRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    object: Optional[PostSubscriptionsApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSubscriptionsRequest:
    request: Optional[PostSubscriptionsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSubscriptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription: Optional[shared_subscription.Subscription] = dataclasses.field(default=None)
    