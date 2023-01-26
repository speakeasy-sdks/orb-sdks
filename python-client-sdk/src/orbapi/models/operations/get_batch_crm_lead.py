import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import lead as shared_lead


@dataclasses.dataclass
class GetBatchCrmLeadQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    all_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allFields', 'style': 'form', 'explode': True }})
    ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetBatchCrmLeadResponseBody:
    invalid_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalidIds') }})
    leads: Optional[list[shared_lead.Lead]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leads') }})
    

@dataclasses.dataclass
class GetBatchCrmLeadRequest:
    query_params: GetBatchCrmLeadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBatchCrmLeadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetBatchCrmLeadResponseBody] = dataclasses.field(default=None)
    
