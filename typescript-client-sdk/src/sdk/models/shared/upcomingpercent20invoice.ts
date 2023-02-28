import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


// UpcomingPercent20InvoiceCustomer
/** 
 * The customer receiving this invoice.
**/
export class UpcomingPercent20InvoiceCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// UpcomingPercent20InvoiceLineItemsGrouping
/** 
 * For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` and `subtotal` will be the values for this particular grouping.
**/
export class UpcomingPercent20InvoiceLineItemsGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}

// UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig
/** 
 * Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
**/
export class UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dimension_values" })
  dimensionValues: string[];
}

// UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig
/** 
 * Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
**/
export class UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "first_unit" })
  firstUnit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "last_unit" })
  lastUnit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unit_amount" })
  unitAmount: string;
}
export enum UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum {
    Matrix = "matrix",
    Tier = "tier"
}

export class UpcomingPercent20InvoiceLineItemsSubLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "matrix_config" })
  @Type(() => UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig)
  matrixConfig?: UpcomingPercent20InvoiceLineItemsSubLineItemsMatrixConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tier_config" })
  @Type(() => UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig)
  tierConfig?: UpcomingPercent20InvoiceLineItemsSubLineItemsTierConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpcomingPercent20InvoiceLineItemsSubLineItemsTypeEnum;
}

export class UpcomingPercent20InvoiceLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "grouping" })
  @Type(() => UpcomingPercent20InvoiceLineItemsGrouping)
  grouping: UpcomingPercent20InvoiceLineItemsGrouping;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  @SpeakeasyMetadata({ elemType: UpcomingPercent20InvoiceLineItemsSubLineItems })
  @Expose({ name: "sub_line_items" })
  @Type(() => UpcomingPercent20InvoiceLineItemsSubLineItems)
  subLineItems: UpcomingPercent20InvoiceLineItemsSubLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal: string;
}

// UpcomingPercent20InvoiceSubscription
/** 
 * The associated subscription for this invoice.
**/
export class UpcomingPercent20InvoiceSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "amount_due" })
  amountDue: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => UpcomingPercent20InvoiceCustomer)
  customer: UpcomingPercent20InvoiceCustomer;

  @SpeakeasyMetadata()
  @Expose({ name: "hosted_invoice_url" })
  hostedInvoiceUrl: string;

  @SpeakeasyMetadata({ elemType: UpcomingPercent20InvoiceLineItems })
  @Expose({ name: "line_items" })
  @Type(() => UpcomingPercent20InvoiceLineItems)
  lineItems: UpcomingPercent20InvoiceLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "subscription" })
  @Type(() => UpcomingPercent20InvoiceSubscription)
  subscription: UpcomingPercent20InvoiceSubscription;

  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal: string;

  @SpeakeasyMetadata()
  @Expose({ name: "target_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  targetDate: Date;
}