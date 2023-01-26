import dataclasses
from typing import Optional
from ..shared import customer as shared_customer


@dataclasses.dataclass
class GetCustomersCustomerIDPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomersCustomerIDRequest:
    path_params: GetCustomersCustomerIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomersCustomerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer: Optional[shared_customer.Customer] = dataclasses.field(default=None)
    
