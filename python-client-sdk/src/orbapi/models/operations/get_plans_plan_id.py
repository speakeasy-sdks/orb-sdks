import dataclasses
from ..shared import plan as shared_plan
from typing import Optional


@dataclasses.dataclass
class GetPlansPlanIDPathParams:
    plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'plan_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPlansPlanIDRequest:
    path_params: GetPlansPlanIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlansPlanIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    plan: Optional[shared_plan.Plan] = dataclasses.field(default=None)
    