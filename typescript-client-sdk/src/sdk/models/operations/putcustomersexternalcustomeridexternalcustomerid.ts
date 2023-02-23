import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PutCustomersExternalCustomerIdExternalCustomerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_customer_id" })
  externalCustomerId: string;
}

// PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyBillingAddress
/** 
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
**/
export class PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyBillingAddress extends SpeakeasyBase {
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
export enum PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyPaymentProviderEnum {
    Quickbooks = "quickbooks",
    StripeCharge = "stripe_charge",
    StripeInvoice = "stripe_invoice",
    BillCom = "bill.com"
}

// PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyShippingAddress
/** 
 * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
**/
export class PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyShippingAddress extends SpeakeasyBase {
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

export class PutCustomersExternalCustomerIdExternalCustomerIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyBillingAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_provider" })
  paymentProvider?: PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyPaymentProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=payment_provider_id" })
  paymentProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyShippingAddress;
}

export class PutCustomersExternalCustomerIdExternalCustomerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCustomersExternalCustomerIdExternalCustomerIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutCustomersExternalCustomerIdExternalCustomerIdRequestBody;
}

export class PutCustomersExternalCustomerIdExternalCustomerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  statusCode: number;
}