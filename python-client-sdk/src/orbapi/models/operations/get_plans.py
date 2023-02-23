import dataclasses
from ..shared import plan as shared_plan
from dataclasses_json import dataclass_json
from orbapi import utils
from typing import Any, Optional


@dataclass_json
@dataclasses.dataclass
class GetPlans200ApplicationJSON:
    data: Optional[list[shared_plan.Plan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetPlansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_plans_200_application_json_object: Optional[GetPlans200ApplicationJSON] = dataclasses.field(default=None)
    