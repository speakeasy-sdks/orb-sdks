import dataclasses
import dateutil.parser
from ..shared import subscription as shared_subscription
from dataclasses_json import dataclass_json
from datetime import date
from enum import Enum
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional

class PostSubscriptionsApplicationJSONExternalMarketplaceEnum(str, Enum):
    GOOGLE = "google"
    AWS = "aws"
    AZURE = "azure"


@dataclass_json
@dataclasses.dataclass
class PostSubscriptionsApplicationJSONPhaseOverrides:
    discount: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    minimum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_amount') }})
    order: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSubscriptionsApplicationJSON:
    align_billing_with_subscription_start_date: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('align_billing_with_subscription_start_date') }})
    auto_collection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_collection') }})
    coupon_redemption_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coupon_redemption_code') }})
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    default_invoice_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_invoice_memo') }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id') }})
    external_marketplace: Optional[PostSubscriptionsApplicationJSONExternalMarketplaceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_marketplace') }})
    external_marketplace_reporting_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_marketplace_reporting_id') }})
    external_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_plan_id') }})
    minimum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_amount') }})
    net_terms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_terms') }})
    phase_overrides: Optional[list[PostSubscriptionsApplicationJSONPhaseOverrides]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase_overrides') }})
    plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_id') }})
    price_overrides: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_overrides') }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

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
    