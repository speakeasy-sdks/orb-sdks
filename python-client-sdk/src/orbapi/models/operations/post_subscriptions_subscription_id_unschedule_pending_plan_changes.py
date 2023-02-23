import dataclasses
from ..shared import subscription as shared_subscription
from typing import Optional


@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUnschedulePendingPlanChangesPathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUnschedulePendingPlanChangesRequest:
    path_params: PostSubscriptionsSubscriptionIDUnschedulePendingPlanChangesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostSubscriptionsSubscriptionIDUnschedulePendingPlanChangesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription: Optional[shared_subscription.Subscription] = dataclasses.field(default=None)
    