import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomerBalanceTransaction } from "./customerbalancetransaction";
import { CustomerTaxId } from "./customertaxid";
import { Price } from "./price";
import { Expose, Transform, Type } from "class-transformer";


// InvoiceAutoCollection
/** 
 * Information about payment auto-collection for this invoice.
**/
export class InvoiceAutoCollection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "next_attempt_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  nextAttemptAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "previously_attempted_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  previouslyAttemptedAt?: Date;
}

// InvoiceCustomer
/** 
 * The customer receiving this invoice.
**/
export class InvoiceCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// InvoiceLineItemsSubLineItemsGrouping
/** 
 * For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` will be the values for this particular grouping.
**/
export class InvoiceLineItemsSubLineItemsGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

// InvoiceLineItemsSubLineItemsMatrixConfig
/** 
 * Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
**/
export class InvoiceLineItemsSubLineItemsMatrixConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dimension_values" })
  dimensionValues: string[];
}

// InvoiceLineItemsSubLineItemsTierConfig
/** 
 * Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
**/
export class InvoiceLineItemsSubLineItemsTierConfig extends SpeakeasyBase {
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
export enum InvoiceLineItemsSubLineItemsTypeEnum {
    Matrix = "matrix",
    Tier = "tier"
}

export class InvoiceLineItemsSubLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "grouping" })
  @Type(() => InvoiceLineItemsSubLineItemsGrouping)
  grouping: InvoiceLineItemsSubLineItemsGrouping;

  @SpeakeasyMetadata()
  @Expose({ name: "matrix_config" })
  @Type(() => InvoiceLineItemsSubLineItemsMatrixConfig)
  matrixConfig?: InvoiceLineItemsSubLineItemsMatrixConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tier_config" })
  @Type(() => InvoiceLineItemsSubLineItemsTierConfig)
  tierConfig?: InvoiceLineItemsSubLineItemsTierConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: InvoiceLineItemsSubLineItemsTypeEnum;
}

export class InvoiceLineItemsTaxAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_rate_description" })
  taxRateDescription: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_rate_percentage" })
  taxRatePercentage: string;
}

export class InvoiceLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "grouping" })
  grouping: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum" })
  minimum: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "price" })
  @Type(() => Price)
  price: Price;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  @SpeakeasyMetadata({ elemType: InvoiceLineItemsSubLineItems })
  @Expose({ name: "sub_line_items" })
  @Type(() => InvoiceLineItemsSubLineItems)
  subLineItems: InvoiceLineItemsSubLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal: string;

  @SpeakeasyMetadata({ elemType: InvoiceLineItemsTaxAmounts })
  @Expose({ name: "tax_amounts" })
  @Type(() => InvoiceLineItemsTaxAmounts)
  taxAmounts: InvoiceLineItemsTaxAmounts[];
}
export enum InvoiceStatusEnum {
    Issued = "issued",
    Paid = "paid",
    Synced = "synced",
    Void = "void",
    Draft = "draft"
}

// InvoiceSubscription
/** 
 * The associated subscription for this invoice.
**/
export class InvoiceSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// Invoice
/** 
 * An [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice) is a fundamental billing entity, representing the request for payment for a single subscription. This includes a set of line items, which correspond to prices in the subscription's plan and can represent fixed recurring fees or usage-based fees. They are generated at the end of a billing period, or as the result of an action, such as a cancellation.
**/
export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount_due" })
  amountDue: string;

  @SpeakeasyMetadata()
  @Expose({ name: "auto_collection" })
  @Type(() => InvoiceAutoCollection)
  autoCollection?: InvoiceAutoCollection;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => InvoiceCustomer)
  customer: InvoiceCustomer;

  @SpeakeasyMetadata({ elemType: CustomerBalanceTransaction })
  @Expose({ name: "customer_balance_transactions" })
  @Type(() => CustomerBalanceTransaction)
  customerBalanceTransactions: CustomerBalanceTransaction[];

  @SpeakeasyMetadata()
  @Expose({ name: "customer_tax_id" })
  @Type(() => CustomerTaxId)
  customerTaxId?: CustomerTaxId;

  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "due_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "hosted_invoice_url" })
  hostedInvoiceUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoice_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  invoiceDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "invoice_pdf" })
  invoicePdf: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issued_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issuedAt?: Date;

  @SpeakeasyMetadata({ elemType: InvoiceLineItems })
  @Expose({ name: "line_items" })
  @Type(() => InvoiceLineItems)
  lineItems: InvoiceLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "memo" })
  memo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum" })
  minimum: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "paid_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  paidAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "scheduled_issue_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  scheduledIssueAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: InvoiceStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subscription" })
  @Type(() => InvoiceSubscription)
  subscription: InvoiceSubscription;

  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: string;

  @SpeakeasyMetadata()
  @Expose({ name: "voided_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  voidedAt?: Date;
}