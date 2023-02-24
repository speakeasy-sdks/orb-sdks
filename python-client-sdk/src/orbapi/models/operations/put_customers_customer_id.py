from __future__ import annotations
import dataclasses
from ..shared import customer as shared_customer
from ..shared import customer_tax_id as shared_customer_tax_id
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from orbapi import utils
from typing import Optional


@dataclasses.dataclass
class PutCustomersCustomerIDPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutCustomersCustomerIDRequestBodyBillingAddress:
    r"""PutCustomersCustomerIDRequestBodyBillingAddress
    The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
    """
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city'), 'exclude': lambda f: f is None }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country'), 'exclude': lambda f: f is None }})
    line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1'), 'exclude': lambda f: f is None }})
    line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2'), 'exclude': lambda f: f is None }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code'), 'exclude': lambda f: f is None }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state'), 'exclude': lambda f: f is None }})
    
class PutCustomersCustomerIDRequestBodyPaymentProviderEnum(str, Enum):
    STRIPE_INVOICE = "stripe_invoice"
    QUICKBOOKS = "quickbooks"
    BILL_COM = "bill.com"
    STRIPE_CHARGE = "stripe_charge"


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutCustomersCustomerIDRequestBodyShippingAddress:
    r"""PutCustomersCustomerIDRequestBodyShippingAddress
    The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
    """
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city'), 'exclude': lambda f: f is None }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country'), 'exclude': lambda f: f is None }})
    line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1'), 'exclude': lambda f: f is None }})
    line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2'), 'exclude': lambda f: f is None }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code'), 'exclude': lambda f: f is None }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state'), 'exclude': lambda f: f is None }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutCustomersCustomerIDRequestBody:
    r"""PutCustomersCustomerIDRequestBody
    The external payments or invoicing solution connected to this customer.
    """
    
    auto_collection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_collection'), 'exclude': lambda f: f is None }})
    billing_address: Optional[PutCustomersCustomerIDRequestBodyBillingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_address'), 'exclude': lambda f: f is None }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email'), 'exclude': lambda f: f is None }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name'), 'exclude': lambda f: f is None }})
    payment_provider: Optional[PutCustomersCustomerIDRequestBodyPaymentProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider'), 'exclude': lambda f: f is None }})
    payment_provider_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider_id'), 'exclude': lambda f: f is None }})
    shipping_address: Optional[PutCustomersCustomerIDRequestBodyShippingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_address'), 'exclude': lambda f: f is None }})
    tax_id: Optional[shared_customer_tax_id.CustomerTaxID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_id'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class PutCustomersCustomerIDRequest:
    path_params: PutCustomersCustomerIDPathParams = dataclasses.field()
    request: Optional[PutCustomersCustomerIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCustomersCustomerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer: Optional[shared_customer.Customer] = dataclasses.field(default=None)
    