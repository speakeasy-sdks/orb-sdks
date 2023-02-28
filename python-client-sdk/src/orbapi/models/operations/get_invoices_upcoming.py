from __future__ import annotations
import dataclasses
from ..shared import upcomingpercent_20invoice as shared_upcomingpercent_20invoice
from typing import Optional


@dataclasses.dataclass
class GetInvoicesUpcomingQueryParams:
    subscription_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'subscription_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInvoicesUpcomingRequest:
    query_params: GetInvoicesUpcomingQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoicesUpcomingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    upcoming_percent_20_invoice: Optional[shared_upcomingpercent_20invoice.UpcomingPercent20Invoice] = dataclasses.field(default=None)
    