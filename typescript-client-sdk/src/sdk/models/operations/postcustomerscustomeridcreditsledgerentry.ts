import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "json, name=auto_collection" })
  autoCollection: boolean;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=net_terms" })
  netTerms: number;
}

export class PostCustomersCustomerIdCreditsLedgerEntryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=block_id" })
  blockId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=entry_type" })
  entryType: PostCustomersCustomerIdCreditsLedgerEntryRequestBodyEntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=expiry_date" })
  expiryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoice_settings" })
  invoiceSettings?: PostCustomersCustomerIdCreditsLedgerEntryRequestBodyInvoiceSettings;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=per_unit_cost_basis" })
  perUnitCostBasis?: string;

  @SpeakeasyMetadata({ data: "json, name=target_expiry_date" })
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