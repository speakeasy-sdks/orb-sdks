import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from orbapi import utils
from ..shared import customer_tax_id as shared_customer_tax_id


@dataclass_json
@dataclasses.dataclass
class CustomerBillingAddress:
    r"""CustomerBillingAddress
    The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
    """
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1') }})
    line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
class CustomerPaymentProviderEnum(str, Enum):
    STRIPE = "stripe"
    QUICKBOOKS = "quickbooks"
    BILL_COM = "bill.com"
    STRIPE_CHARGE = "stripe_charge"
    STRIPE_INVOICE = "stripe_invoice"


@dataclass_json
@dataclasses.dataclass
class CustomerShippingAddress:
    r"""CustomerShippingAddress
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
class Customer:
    r"""Customer
    A customer is a buyer of your products, and the other party to the billing relationship.
    
    In Orb, customers are assigned system generated identifiers automatically, but it's often desirable to have these match existing identifiers in your system. To avoid having to denormalize Orb ID information, you can pass in an `external_customer_id` with your own identifier. See [Customer ID Aliases](../docs/Customer-ID-Aliases.md) for further information about how these aliases work in Orb.
    
    In addition to having an identifier in your system, a customer may exist in a payment provider solution like Stripe. Use the `payment_provider_id` and the `payment_provider` enum field to express this mapping.
    
    A customer also has a timezone (from the standard [IANA timezone database](https://www.iana.org/time-zones)), which defaults to your account's timezone. See [Timezone localization](../docs/Timezone-localization.md) for information on what this timezone parameter influences within Orb.
    """
    
    balance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payment_provider: CustomerPaymentProviderEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider') }})
    payment_provider_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_provider_id') }})
    tax_id: shared_customer_tax_id.CustomerTaxID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_id') }})
    timezone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    auto_collection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_collection') }})
    billing_address: Optional[CustomerBillingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_address') }})
    external_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_customer_id') }})
    shipping_address: Optional[CustomerShippingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_address') }})
    
