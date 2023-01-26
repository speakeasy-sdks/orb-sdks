import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from orbapi import utils


@dataclass_json
@dataclasses.dataclass
class StringListFilter:
    has: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has') }})
    has_every: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasEvery') }})
    has_some: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasSome') }})
    is_empty: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEmpty') }})
    
