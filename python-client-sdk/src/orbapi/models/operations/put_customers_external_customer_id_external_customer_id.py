from __future__ import annotations
import dataclasses
from ..shared import customer as shared_customer
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from orbapi import utils
from typing import Optional


@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDPathParams:
    external_customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyBillingAddress:
    r"""PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyBillingAddress
    The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
    """
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city'), 'exclude': lambda f: f is None }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country'), 'exclude': lambda f: f is None }})
    line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1'), 'exclude': lambda f: f is None }})
    line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2'), 'exclude': lambda f: f is None }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code'), 'exclude': lambda f: f is None }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state'), 'exclude': lambda f: f is None }})
    
class PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum(str, Enum):
    QUICKBOOKS = "quickbooks"
    STRIPE_CHARGE = "stripe_charge"
    STRIPE_INVOICE = "stripe_invoice"
    BILL_COM = "bill.com"


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyShippingAddress:
    r"""PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyShippingAddress
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
class PutCustomersExternalCustomerIDExternalCustomerIDRequestBody:
    billing_address: Optional[PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyBillingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_address'), 'exclude': lambda f: f is None }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email'), 'exclude': lambda f: f is None }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name'), 'exclude': lambda f: f is None }})
    payment_provider: Optional[PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider'), 'exclude': lambda f: f is None }})
    payment_provider_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider_id'), 'exclude': lambda f: f is None }})
    shipping_address: Optional[PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyShippingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_address'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDRequest:
    path_params: PutCustomersExternalCustomerIDExternalCustomerIDPathParams = dataclasses.field()
    request: Optional[PutCustomersExternalCustomerIDExternalCustomerIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer: Optional[shared_customer.Customer] = dataclasses.field(default=None)
    