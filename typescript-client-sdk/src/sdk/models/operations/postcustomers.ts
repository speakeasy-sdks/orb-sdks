import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



// PostCustomersRequestBodyBillingAddress
/** 
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
**/
export class PostCustomersRequestBodyBillingAddress extends SpeakeasyBase {
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


export class PostCustomersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: PostCustomersRequestBodyBillingAddress;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=payment_provider" })
  paymentProvider?: PostCustomersRequestBodyPaymentProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=payment_provider_id" })
  paymentProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: PostCustomersRequestBodyShippingAddress;

  @SpeakeasyMetadata({ data: "json, name=tax_id" })
  taxId?: shared.CustomerTaxId;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
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
