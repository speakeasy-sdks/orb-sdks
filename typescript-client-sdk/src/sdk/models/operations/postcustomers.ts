import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


// PostCustomersRequestBodyBillingAddress
/** 
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
**/
export class PostCustomersRequestBodyBillingAddress extends SpeakeasyBase {
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
export enum PostCustomersRequestBodyPaymentProviderEnum {
    Quickbooks = "quickbooks",
    BillCom = "bill.com",
    StripeCharge = "stripe_charge",
    StripeInvoice = "stripe_invoice"
}

// PostCustomersRequestBodyShippingAddress
/** 
 * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
**/
export class PostCustomersRequestBodyShippingAddress extends SpeakeasyBase {
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

export class PostCustomersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => PostCustomersRequestBodyBillingAddress)
  billingAddress?: PostCustomersRequestBodyBillingAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider" })
  paymentProvider?: PostCustomersRequestBodyPaymentProviderEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider_id" })
  paymentProviderId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipping_address" })
  @Type(() => PostCustomersRequestBodyShippingAddress)
  shippingAddress?: PostCustomersRequestBodyShippingAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_id" })
  @Type(() => shared.CustomerTaxId)
  taxId?: shared.CustomerTaxId;

  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone?: string;
}

export class PostCustomersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostCustomersRequestBody;
}

export class PostCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  statusCode: number;
}