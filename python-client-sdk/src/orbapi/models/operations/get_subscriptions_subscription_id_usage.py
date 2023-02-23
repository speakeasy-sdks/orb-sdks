import dataclasses
import dateutil.parser
from datetime import datetime
from enum import Enum
from marshmallow import fields
from typing import Optional


@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDUsagePathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    
class GetSubscriptionsSubscriptionIDUsageGranularityEnum(str, Enum):
    DAY = "day"

class GetSubscriptionsSubscriptionIDUsageViewModeEnum(str, Enum):
    PERIODIC = "periodic"
    CUMULATIVE = "cumulative"


@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDUsageQueryParams:
    billable_metric_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'billable_metric_id', 'style': 'form', 'explode': True }})
    granularity: Optional[GetSubscriptionsSubscriptionIDUsageGranularityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'granularity', 'style': 'form', 'explode': True }})
    group_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_by', 'style': 'form', 'explode': True }})
    timeframe_end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeframe_end', 'style': 'form', 'explode': True }})
    timeframe_start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeframe_start', 'style': 'form', 'explode': True }})
    view_mode: Optional[GetSubscriptionsSubscriptionIDUsageViewModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view_mode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDUsageRequest:
    path_params: GetSubscriptionsSubscriptionIDUsagePathParams = dataclasses.field()
    query_params: GetSubscriptionsSubscriptionIDUsageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscriptionsSubscriptionIDUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    