from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import price as shared_price
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from orbapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class GetSubscriptionsCostsByIDPathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionsCostsByIDQueryParams:
    group_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_by', 'style': 'form', 'explode': True }})
    timeframe_end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeframe_end', 'style': 'form', 'explode': True }})
    timeframe_start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeframe_start', 'style': 'form', 'explode': True }})
    view_mode: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view_mode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSubscriptionsCostsByIDRequest:
    path_params: GetSubscriptionsCostsByIDPathParams = dataclasses.field()
    query_params: GetSubscriptionsCostsByIDQueryParams = dataclasses.field()
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCostsPriceGroups:
    grouping_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grouping_key') }})
    grouping_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grouping_value') }})
    total: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    secondary_grouping_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary_grouping_key'), 'exclude': lambda f: f is None }})
    secondary_grouping_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary_grouping_value'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCosts:
    r"""GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCosts
    Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
    """
    
    price_groups: list[GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCostsPriceGroups] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_groups') }})
    price: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price'), 'exclude': lambda f: f is None }})
    subtotal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotal'), 'exclude': lambda f: f is None }})
    total: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetSubscriptionsCostsByID200ApplicationJSONData:
    per_price_costs: list[GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCosts] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_price_costs') }})
    subtotal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotal') }})
    timeframe_end: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeframe_end'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timeframe_start: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeframe_start'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetSubscriptionsCostsByID200ApplicationJSON:
    data: list[GetSubscriptionsCostsByID200ApplicationJSONData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetSubscriptionsCostsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_subscriptions_costs_by_id_200_application_json_object: Optional[GetSubscriptionsCostsByID200ApplicationJSON] = dataclasses.field(default=None)
    