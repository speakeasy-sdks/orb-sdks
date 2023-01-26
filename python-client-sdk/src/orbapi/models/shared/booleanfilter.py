import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils


@dataclass_json
@dataclasses.dataclass
class BooleanFilter:
    equals: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equals') }})
    not_: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('not') }})
    
