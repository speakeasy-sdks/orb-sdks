from __future__ import annotations
import dataclasses
from ..shared import invoice as shared_invoice
from dataclasses_json import Undefined, dataclass_json
from orbapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class GetInvoicesQueryParams:
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customer_id', 'style': 'form', 'explode': True }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'external_customer_id', 'style': 'form', 'explode': True }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subscription_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInvoicesRequest:
    query_params: GetInvoicesQueryParams = dataclasses.field()
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetInvoices200ApplicationJSON:
    data: Optional[list[shared_invoice.Invoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data'), 'exclude': lambda f: f is None }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class GetInvoicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_invoices_200_application_json_object: Optional[GetInvoices200ApplicationJSON] = dataclasses.field(default=None)
    