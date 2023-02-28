import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomerTaxId } from "./customertaxid";
import { Expose, Transform, Type } from "class-transformer";


// CustomerBillingAddress
/** 
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
**/
export class CustomerBillingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance: string;

  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => CustomerBillingAddress)
  billingAddress?: CustomerBillingAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider" })
  paymentProvider: CustomerPaymentProviderEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider_id" })
  paymentProviderId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipping_address" })
  @Type(() => CustomerShippingAddress)
  shippingAddress?: CustomerShippingAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_id" })
  @Type(() => CustomerTaxId)
  taxId: CustomerTaxId;

  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone: string;
}