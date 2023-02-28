from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import plan_phase as shared_plan_phase
from ..shared import price as shared_price
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PlanBasePlan:
    r"""PlanBasePlan
    The parent plan if the given plan was created by overriding one or more of the parent's prices
    """
    
    external_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_plan_id'), 'exclude': lambda f: f is None }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id'), 'exclude': lambda f: f is None }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PlanProduct:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PlanTrialConfigTrialPeriodUnitEnum(str, Enum):
    DAYS = "days"


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PlanTrialConfig:
    trial_period_unit: PlanTrialConfigTrialPeriodUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_period_unit') }})
    trial_period: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_period'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
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
    base_plan: Optional[PlanBasePlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_plan'), 'exclude': lambda f: f is None }})
    base_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_plan_id'), 'exclude': lambda f: f is None }})
    default_invoice_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_invoice_memo'), 'exclude': lambda f: f is None }})
    external_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_plan_id'), 'exclude': lambda f: f is None }})
    net_terms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_terms'), 'exclude': lambda f: f is None }})
    plan_phases: Optional[list[shared_plan_phase.PlanPhase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_phases'), 'exclude': lambda f: f is None }})
    trial_config: Optional[PlanTrialConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_config'), 'exclude': lambda f: f is None }})
    