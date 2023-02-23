import dataclasses
from ..shared import event as shared_event
from dataclasses_json import dataclass_json
from orbapi import utils
from typing import Any, Optional


@dataclass_json
@dataclasses.dataclass
class PostEventsSearchRequestBody:
    event_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_ids') }})
    invoice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_id') }})
    

@dataclasses.dataclass
class PostEventsSearchRequest:
    request: Optional[PostEventsSearchRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclasses.dataclass
class PostEventsSearch200ApplicationJSON:
    r"""PostEventsSearch200ApplicationJSON
    An array of events matching the specified search_criteria. If no events match, this array will be empty.
    """
    
    data: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class PostEventsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_events_search_200_application_json_object: Optional[PostEventsSearch200ApplicationJSON] = dataclasses.field(default=None)
    