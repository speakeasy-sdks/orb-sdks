import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import plan_phase as shared_plan_phase
from ..shared import price as shared_price


@dataclass_json
@dataclasses.dataclass
class PlanBasePlan:
    r"""PlanBasePlan
    The parent plan if the given plan was created by overriding one or more of the parent's prices
    """
    
    external_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_plan_id') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PlanProduct:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PlanTrialConfigTrialPeriodUnitEnum(str, Enum):
    DAYS = "days"


@dataclass_json
@dataclasses.dataclass
class PlanTrialConfig:
    trial_period_unit: PlanTrialConfigTrialPeriodUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_period_unit') }})
    trial_period: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_period') }})
    

@dataclass_json
@dataclasses.dataclass
class Plan:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discount: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoicing_currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoicing_currency') }})
    minimum: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[shared_price.Price] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    product: PlanProduct = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    base_plan: Optional[PlanBasePlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_plan') }})
    base_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_plan_id') }})
    default_invoice_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_invoice_memo') }})
    external_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_plan_id') }})
    net_terms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_terms') }})
    plan_phases: Optional[list[shared_plan_phase.PlanPhase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_phases') }})
    trial_config: Optional[PlanTrialConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_config') }})
    
