import dataclasses



@dataclasses.dataclass
class GetExternalPlansPlanIDPathParams:
    external_plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_plan_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExternalPlansPlanIDRequest:
    path_params: GetExternalPlansPlanIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExternalPlansPlanIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    