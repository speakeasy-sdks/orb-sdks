import dataclasses
from typing import Optional
from ..shared import subscription as shared_subscription


@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUnschedulePendingCancellationPathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUnschedulePendingCancellationRequest:
    path_params: PostSubscriptionsSubscriptionIDUnschedulePendingCancellationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUnschedulePendingCancellationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription: Optional[shared_subscription.Subscription] = dataclasses.field(default=None)
    
