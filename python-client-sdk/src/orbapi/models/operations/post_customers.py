import dataclasses
from ..shared import customer as shared_customer
from ..shared import customer_tax_id as shared_customer_tax_id
from dataclasses_json import dataclass_json
from enum import Enum
from orbapi import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class PostCustomersRequestBodyBillingAddress:
    r"""PostCustomersRequestBodyBillingAddress
    The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
    """
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1') }})
    line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
class PostCustomersRequestBodyPaymentProviderEnum(str, Enum):
    QUICKBOOKS = "quickbooks"
    BILL_COM = "bill.com"
    STRIPE_CHARGE = "stripe_charge"
    STRIPE_INVOICE = "stripe_invoice"


@dataclass_json
@dataclasses.dataclass
class PostCustomersRequestBodyShippingAddress:
    r"""PostCustomersRequestBodyShippingAddress
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
class PostCustomersRequestBody:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    auto_collection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_collection') }})
    billing_address: Optional[PostCustomersRequestBodyBillingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_address') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id') }})
    payment_provider: Optional[PostCustomersRequestBodyPaymentProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider') }})
    payment_provider_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider_id') }})
    shipping_address: Optional[PostCustomersRequestBodyShippingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_address') }})
    tax_id: Optional[shared_customer_tax_id.CustomerTaxID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_id') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclasses.dataclass
class PostCustomersRequest:
    request: Optional[PostCustomersRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCustomersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer: Optional[shared_customer.Customer] = dataclasses.field(default=None)
    