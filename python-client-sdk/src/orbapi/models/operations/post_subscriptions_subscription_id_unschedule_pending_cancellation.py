from __future__ import annotations
import dataclasses
from ..shared import subscription as shared_subscription
from typing import Optional


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
    