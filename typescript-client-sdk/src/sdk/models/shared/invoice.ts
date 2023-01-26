import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { CustomerBalanceTransaction } from "./customerbalancetransaction";
import { CustomerTaxId } from "./customertaxid";



// InvoiceAutoCollection
/** 
 * Information about payment auto-collection for this invoice.
**/
export class InvoiceAutoCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_attempt_at" })
  nextAttemptAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=previously_attempted_at" })
  previouslyAttemptedAt?: Date;
}


// InvoiceCustomer
/** 
 * The customer receiving this invoice.
**/
export class InvoiceCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external_customer_id" })
  externalCustomerId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


// InvoiceLineItemsSubLineItemsGrouping
/** 
 * For configured prices that are split by a grouping key, this will be populated with the key and a value. The `amount` will be the values for this particular grouping.
**/
export class InvoiceLineItemsSubLineItemsGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// InvoiceLineItemsSubLineItemsMatrixConfig
/** 
 * Only available if `type` is `matrix`. Contains the values of the matrix that this `sub_line_item` represents.
**/
export class InvoiceLineItemsSubLineItemsMatrixConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension_values" })
  dimensionValues: string[];
}


// InvoiceLineItemsSubLineItemsTierConfig
/** 
 * Only available if `type` is `tier`. Contains the range of units in this tier and the unit amount.
**/
export class InvoiceLineItemsSubLineItemsTierConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_unit" })
  firstUnit: number;

  @SpeakeasyMetadata({ data: "json, name=last_unit" })
  lastUnit: number;

  @SpeakeasyMetadata({ data: "json, name=unit_amount" })
  unitAmount: string;
}

export enum InvoiceLineItemsSubLineItemsTypeEnum {
    Matrix = "matrix",
    Tier = "tier"
}


export class InvoiceLineItemsSubLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=grouping" })
  grouping: InvoiceLineItemsSubLineItemsGrouping;

  @SpeakeasyMetadata({ data: "json, name=matrix_config" })
  matrixConfig?: InvoiceLineItemsSubLineItemsMatrixConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=tier_config" })
  tierConfig?: InvoiceLineItemsSubLineItemsTierConfig;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: InvoiceLineItemsSubLineItemsTypeEnum;
}


export class InvoiceLineItemsTaxAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=tax_rate_description" })
  taxRateDescription: string;

  @SpeakeasyMetadata({ data: "json, name=tax_rate_percentage" })
  taxRatePercentage: string;
}


export class InvoiceLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=grouping" })
  grouping: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: Price;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=sub_line_items", elemType: InvoiceLineItemsSubLineItems })
  subLineItems: InvoiceLineItemsSubLineItems[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal: string;

  @SpeakeasyMetadata({ data: "json, name=tax_amounts", elemType: InvoiceLineItemsTaxAmounts })
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


// Invoice
/** 
 * An [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice) is a fundamental billing entity, representing the request for payment for a single subscription. This includes a set of line items, which correspond to prices in the subscription's plan and can represent fixed recurring fees or usage-based fees. They are generated at the end of a billing period, or as the result of an action, such as a cancellation.
**/
export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount_due" })
  amountDue: string;

  @SpeakeasyMetadata({ data: "json, name=auto_collection" })
  autoCollection?: InvoiceAutoCollection;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer: InvoiceCustomer;

  @SpeakeasyMetadata({ data: "json, name=customer_balance_transactions", elemType: CustomerBalanceTransaction })
  customerBalanceTransactions: CustomerBalanceTransaction[];

  @SpeakeasyMetadata({ data: "json, name=customer_tax_id" })
  customerTaxId?: CustomerTaxId;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=hosted_invoice_url" })
  hostedInvoiceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_date" })
  invoiceDate: Date;

  @SpeakeasyMetadata({ data: "json, name=invoice_pdf" })
  invoicePdf: string;

  @SpeakeasyMetadata({ data: "json, name=issued_at" })
  issuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItems })
  lineItems: InvoiceLineItems[];

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=paid_at" })
  paidAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduled_issue_at" })
  scheduledIssueAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: InvoiceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription: InvoiceSubscription;

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: string;

  @SpeakeasyMetadata({ data: "json, name=voided_at" })
  voidedAt?: Date;
}
