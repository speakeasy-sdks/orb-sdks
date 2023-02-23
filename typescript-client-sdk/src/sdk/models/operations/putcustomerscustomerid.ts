import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PutCustomersCustomerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}

// PutCustomersCustomerIdRequestBodyBillingAddress
/** 
 * The customer's billing address; all fields in the address are optional. This address appears on customer invoices.
**/
export class PutCustomersCustomerIdRequestBodyBillingAddress extends SpeakeasyBase {
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

// PutCustomersCustomerIdRequestBody
/** 
 * The external payments or invoicing solution connected to this customer.
**/
export class PutCustomersCustomerIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_collection" })
  autoCollection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: PutCustomersCustomerIdRequestBodyBillingAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_provider" })
  paymentProvider?: PutCustomersCustomerIdRequestBodyPaymentProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=payment_provider_id" })
  paymentProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: PutCustomersCustomerIdRequestBodyShippingAddress;

  @SpeakeasyMetadata({ data: "json, name=tax_id" })
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