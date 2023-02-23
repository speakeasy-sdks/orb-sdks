import dataclasses
from ..shared import customer_balance_transaction as shared_customer_balance_transaction
from dataclasses_json import dataclass_json
from orbapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class GetCustomersCustomerIDBalanceTransactionsPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomersCustomerIDBalanceTransactionsRequest:
    path_params: GetCustomersCustomerIDBalanceTransactionsPathParams = dataclasses.field()
    

@dataclass_json
@dataclasses.dataclass
class GetCustomersCustomerIDBalanceTransactions200ApplicationJSON:
    data: Optional[list[shared_customer_balance_transaction.CustomerBalanceTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_metadata') }})
    

@dataclasses.dataclass
class GetCustomersCustomerIDBalanceTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_customers_customer_id_balance_transactions_200_application_json_object: Optional[GetCustomersCustomerIDBalanceTransactions200ApplicationJSON] = dataclasses.field(default=None)
    