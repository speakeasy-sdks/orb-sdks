import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import deal as shared_deal


@dataclasses.dataclass
class GetOneCrmDealQueryParams:
    access_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accessToken', 'style': 'form', 'explode': True }})
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    all_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allFields', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetOneCrmDealResponseBody:
    deal: Optional[shared_deal.Deal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal') }})
    

@dataclasses.dataclass
class GetOneCrmDealRequest:
    query_params: GetOneCrmDealQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneCrmDealResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_body: Optional[GetOneCrmDealResponseBody] = dataclasses.field(default=None)
    
