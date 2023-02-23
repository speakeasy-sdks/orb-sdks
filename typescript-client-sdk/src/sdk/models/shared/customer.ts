import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomerTaxId } from "./customertaxid";


// CustomerBillingAddress
/** 
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
**/
export class CustomerBillingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
export enum CustomerPaymentProviderEnum {
    Stripe = "stripe",
    Quickbooks = "quickbooks",
    BillCom = "bill.com",
    StripeCharge = "stripe_charge",
    StripeInvoice = "stripe_invoice"
}

// CustomerShippingAddress
/** 
 * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
**/
export class CustomerShippingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}

// Customer
/** 
 * A customer is a buyer of your products, and the other party to the billing relationship.
 * 
 * In Orb, customers are assigned system generated identifiers automatically, but it's often desirable to have these match existing identifiers in your system. To avoid having to denormalize Orb ID information, you can pass in an `external_customer_id` with your own identifier. See [Customer ID Aliases](../docs/Customer-ID-Aliases.md) for further information about how these aliases work in Orb.
 * 
 * In addition to having an identifier in your system, a customer may exist in a payment provider solution like Stripe. Use the `payment_provider_id` and the `payment_provider` enum field to express this mapping.
 * 
 * A customer also has a timezone (from the standard [IANA timezone database](https://www.iana.org/time-zones)), which defaults to your account's timezone. See [Timezone localization](../docs/Timezone-localization.md) for information on what this timezone parameter influences within Orb.
**/
export class Customer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: string;

  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: CustomerBillingAddress;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=payment_provider" })
  paymentProvider: CustomerPaymentProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=payment_provider_id" })
  paymentProviderId: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: CustomerShippingAddress;

  @SpeakeasyMetadata({ data: "json, name=tax_id" })
  taxId: CustomerTaxId;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone: string;
}