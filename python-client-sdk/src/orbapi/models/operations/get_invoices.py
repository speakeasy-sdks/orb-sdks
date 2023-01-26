import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import invoice as shared_invoice


@dataclasses.dataclass
class GetInvoicesQueryParams:
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customer_id', 'style': 'form', 'explode': True }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'external_customer_id', 'style': 'form', 'explode': True }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subscription_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoices200ApplicationJSON:
    data: Optional[list[shared_invoice.Invoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetInvoicesRequest:
    query_params: GetInvoicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_invoices_200_application_json_object: Optional[GetInvoices200ApplicationJSON] = dataclasses.field(default=None)
    
