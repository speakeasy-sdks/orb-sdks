import dataclasses
from ..shared import subscription as shared_subscription
from typing import Optional


@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDPathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDRequest:
    path_params: GetSubscriptionsSubscriptionIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription: Optional[shared_subscription.Subscription] = dataclasses.field(default=None)
    