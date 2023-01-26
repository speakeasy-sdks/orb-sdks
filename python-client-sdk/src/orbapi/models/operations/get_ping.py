import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils


@dataclass_json
@dataclasses.dataclass
class GetPing200ApplicationJSON:
    response: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    

@dataclasses.dataclass
class GetPingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_ping_200_application_json_object: Optional[GetPing200ApplicationJSON] = dataclasses.field(default=None)
    
