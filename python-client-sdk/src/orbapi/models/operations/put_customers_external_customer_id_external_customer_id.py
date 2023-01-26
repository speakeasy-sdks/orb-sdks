import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import customer as shared_customer


@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDPathParams:
    external_customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyBillingAddress:
    r"""PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyBillingAddress
    The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
    """
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1') }})
    line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
class PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum(str, Enum):
    QUICKBOOKS = "quickbooks"
    STRIPE_CHARGE = "stripe_charge"
    STRIPE_INVOICE = "stripe_invoice"
    BILL_COM = "bill.com"


@dataclass_json
@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyShippingAddress:
    r"""PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyShippingAddress
    The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
    """
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1') }})
    line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDRequestBody:
    billing_address: Optional[PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyBillingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_address') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payment_provider: Optional[PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyPaymentProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider') }})
    payment_provider_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider_id') }})
    shipping_address: Optional[PutCustomersExternalCustomerIDExternalCustomerIDRequestBodyShippingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_address') }})
    

@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDRequest:
    path_params: PutCustomersExternalCustomerIDExternalCustomerIDPathParams = dataclasses.field()
    request: Optional[PutCustomersExternalCustomerIDExternalCustomerIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCustomersExternalCustomerIDExternalCustomerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer: Optional[shared_customer.Customer] = dataclasses.field(default=None)
    
