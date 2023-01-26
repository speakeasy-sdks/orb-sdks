import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from orbapi import utils

class PlanPhaseDurationUnitEnum(str, Enum):
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
    ANNUAL = "annual"


@dataclass_json
@dataclasses.dataclass
class PlanPhase:
    r"""PlanPhase
    A plan can optionally consist of plan phases, which represents a pricing configuration that's only active for the length of time specified by `duration` and `duration_unit`. All plans must have an evergreen phase, which is the last phase and active indefinitely.
    """
    
    discount: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    duration_unit: PlanPhaseDurationUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_unit') }})
    minimum: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    
