import dataclasses
from ..shared import invoice as shared_invoice
from typing import Optional


@dataclasses.dataclass
class GetInvoiceInvoiceIDPathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoice_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoiceInvoiceIDRequest:
    path_params: GetInvoiceInvoiceIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoiceInvoiceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invoice: Optional[shared_invoice.Invoice] = dataclasses.field(default=None)
    