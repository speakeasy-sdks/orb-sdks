from __future__ import annotations
import dataclasses



@dataclasses.dataclass
class DeleteCustomersCustomerIDPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCustomersCustomerIDRequest:
    path_params: DeleteCustomersCustomerIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCustomersCustomerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    