import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import subscription as shared_subscription


@dataclasses.dataclass
class GetSubscriptionsQueryParams:
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customer_id', 'style': 'form', 'explode': True }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'external_customer_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSubscriptions200ApplicationJSON:
    data: Optional[list[shared_subscription.Subscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetSubscriptionsRequest:
    query_params: GetSubscriptionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscriptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_subscriptions_200_application_json_object: Optional[GetSubscriptions200ApplicationJSON] = dataclasses.field(default=None)
    
