import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PutCustomersCustomerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}

// PutCustomersCustomerIdRequestBodyBillingAddress
/** 
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
**/
export class PutCustomersCustomerIdRequestBodyBillingAddress extends SpeakeasyBase {
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
export enum PutCustomersCustomerIdRequestBodyPaymentProviderEnum {
    StripeInvoice = "stripe_invoice",
    Quickbooks = "quickbooks",
    BillCom = "bill.com",
    StripeCharge = "stripe_charge"
}

// PutCustomersCustomerIdRequestBodyShippingAddress
/** 
 * The customer's shipping address; all fields in the address are optional. Note that downstream tax calculations are based on the shipping address.
**/
export class PutCustomersCustomerIdRequestBodyShippingAddress extends SpeakeasyBase {
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

// PutCustomersCustomerIdRequestBody
/** 
 * The external payments or invoicing solution connected to this customer.
**/
export class PutCustomersCustomerIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => PutCustomersCustomerIdRequestBodyBillingAddress)
  billingAddress?: PutCustomersCustomerIdRequestBodyBillingAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider" })
  paymentProvider?: PutCustomersCustomerIdRequestBodyPaymentProviderEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_provider_id" })
  paymentProviderId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipping_address" })
  @Type(() => PutCustomersCustomerIdRequestBodyShippingAddress)
  shippingAddress?: PutCustomersCustomerIdRequestBodyShippingAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_id" })
  @Type(() => shared.CustomerTaxId)
  taxId?: shared.CustomerTaxId;
}

export class PutCustomersCustomerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCustomersCustomerIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutCustomersCustomerIdRequestBody;
}

export class PutCustomersCustomerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  statusCode: number;
}