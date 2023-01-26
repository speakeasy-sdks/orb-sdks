import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import lead as shared_lead


@dataclasses.dataclass
class GetOneCrmLeadQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    all_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allFields', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetOneCrmLeadResponseBody:
    lead: Optional[shared_lead.Lead] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lead') }})
    

@dataclasses.dataclass
class GetOneCrmLeadRequest:
    query_params: GetOneCrmLeadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneCrmLeadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetOneCrmLeadResponseBody] = dataclasses.field(default=None)
    
