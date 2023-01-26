import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpcomingPercent20InvoiceCustomer
/** 
 * The customer receiving this invoice.
**/
export class UpcomingPercent20InvoiceCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external_customer_id" })
  externalCustomerId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


// UpcomingPercent20InvoiceLineItemsGrouping
/** 
 * For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` and `subtotal` will be the values for this particular grouping.
**/
export class UpcomingPercent20InvoiceLineItemsGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


// UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig
/** 
 * Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
**/
export class UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension_values" })
  dimensionValues: string[];
}


// UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig
/** 
 * Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
**/
export class UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_unit" })
  firstUnit: number;

  @SpeakeasyMetadata({ data: "json, name=last_unit" })
  lastUnit: number;

  @SpeakeasyMetadata({ data: "json, name=unit_amount" })
  unitAmount: string;
}

export enum UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum {
    Matrix = "matrix",
    Tier = "tier"
}


export class UpcomingPercent20InvoiceLineItemsSubLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=matrix_config" })
  matrixConfig?: UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=tier_config" })
  tierConfig?: UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum;
}


export class UpcomingPercent20InvoiceLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=grouping" })
  grouping: UpcomingPercent20InvoiceLineItemsGrouping;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=sub_line_items", elemType: UpcomingPercent20InvoiceLineItemsSubLineItems })
  subLineItems: UpcomingPercent20InvoiceLineItemsSubLineItems[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal: string;
}


// UpcomingPercent20InvoiceSubscription
/** 
 * The associated subscription for this invoice.
**/
export class UpcomingPercent20InvoiceSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


// UpcomingPercent20Invoice
/** 
 * Upcoming invoices contain a line-by-line breakdown of an upcoming amount due for a subscription, including incurred usage in the billing period as well as any recurring fees. 
 * 
 * Although each line item will be invoiced on the `target_date`, each invoice line item may have distinct date ranges (e.g. for usage billed in arrears, the range may specify the current month whereas an in-advance recurring fees will be for the following month).
 * 
 * Since an invoice resource has not been created for this upcoming invoice, this endpoint intentionally does not return an `id` field.
**/
export class UpcomingPercent20Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount_due" })
  amountDue: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer: UpcomingPercent20InvoiceCustomer;

  @SpeakeasyMetadata({ data: "json, name=hosted_invoice_url" })
  hostedInvoiceUrl: string;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: UpcomingPercent20InvoiceLineItems })
  lineItems: UpcomingPercent20InvoiceLineItems[];

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription: UpcomingPercent20InvoiceSubscription;

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal: string;

  @SpeakeasyMetadata({ data: "json, name=target_date" })
  targetDate: Date;
}
