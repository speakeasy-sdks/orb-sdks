import dataclasses
from ..shared import customer as shared_customer
from typing import Optional


@dataclasses.dataclass
class GetCustomersExternalCustomerIDExternalCustomerIDPathParams:
    external_customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_customer_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomersExternalCustomerIDExternalCustomerIDRequest:
    path_params: GetCustomersExternalCustomerIDExternalCustomerIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomersExternalCustomerIDExternalCustomerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer: Optional[shared_customer.Customer] = dataclasses.field(default=None)
    