import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Transform, Type } from "class-transformer";


export class PostCustomersCustomerIdCreditsLedgerEntryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}
export enum PostCustomersCustomerIdCreditsLedgerEntryRequestBodyEntryTypeEnum {
    Increment = "increment",
    Decrement = "decrement",
    ExpirationChange = "expiration_change"
}

// PostCustomersCustomerIdCreditsLedgerEntryRequestBodyInvoiceSettings
/** 
 * Passing `invoice_settings` automatically generates an invoice for the newly added credits. If `invoice_settings` is passed, you must specify `per_unit_cost_basis`, as the calculation of the invoice total is done on that basis.
**/
export class PostCustomersCustomerIdCreditsLedgerEntryRequestBodyInvoiceSettings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auto_collection" })
  autoCollection: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "memo" })
  memo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "net_terms" })
  netTerms: number;
}

export class PostCustomersCustomerIdCreditsLedgerEntryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "block_id" })
  blockId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "entry_type" })
  entryType: PostCustomersCustomerIdCreditsLedgerEntryRequestBodyEntryTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "expiry_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  expiryDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "invoice_settings" })
  @Type(() => PostCustomersCustomerIdCreditsLedgerEntryRequestBodyInvoiceSettings)
  invoiceSettings?: PostCustomersCustomerIdCreditsLedgerEntryRequestBodyInvoiceSettings;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "per_unit_cost_basis" })
  perUnitCostBasis?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "target_expiry_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  targetExpiryDate?: Date;
}

export class PostCustomersCustomerIdCreditsLedgerEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCustomersCustomerIdCreditsLedgerEntryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostCustomersCustomerIdCreditsLedgerEntryRequestBody;
}

export class PostCustomersCustomerIdCreditsLedgerEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  creditLedgerEntry?: shared.CreditLedgerEntry;

  @SpeakeasyMetadata()
  statusCode: number;
}