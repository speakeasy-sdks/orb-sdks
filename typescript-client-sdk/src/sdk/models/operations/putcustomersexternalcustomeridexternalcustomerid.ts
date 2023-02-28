import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutCustomersExternalCustomerIdExternalCustomerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_customer_id" })
  externalCustomerId: string;
}

// PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyBillingAddress
/** 
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
**/
export class PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyBillingAddress extends SpeakeasyBase {
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

export class PutCustomersExternalCustomerIdExternalCustomerIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyBillingAddress)
  billingAddress?: PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyBillingAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider" })
  paymentProvider?: PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyPaymentProviderEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider_id" })
  paymentProviderId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipping_address" })
  @Type(() => PutCustomersExternalCustomerIdExternalCustomerIdRequestBodyShippingAddress)
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