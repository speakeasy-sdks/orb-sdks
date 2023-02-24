from __future__ import annotations
import dataclasses
from ..shared import event as shared_event
from dataclasses_json import Undefined, dataclass_json
from orbapi import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostEventsSearchRequestBody:
    event_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_ids'), 'exclude': lambda f: f is None }})
    invoice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_id'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class PostEventsSearchRequest:
    request: Optional[PostEventsSearchRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostEventsSearch200ApplicationJSON:
    r"""PostEventsSearch200ApplicationJSON
    An array of events matching the specified search_criteria. If no events match, this array will be empty.
    """
    
    data: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data'), 'exclude': lambda f: f is None }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class PostEventsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_events_search_200_application_json_object: Optional[PostEventsSearch200ApplicationJSON] = dataclasses.field(default=None)
    