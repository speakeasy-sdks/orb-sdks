import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreditLedgerEntryCreditBlock
/** 
 * Credit block that the entry affected
**/
export class CreditLedgerEntryCreditBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiry_date" })
  expiryDate: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=per_unit_cost_basis" })
  perUnitCostBasis: string;
}


export class CreditLedgerEntryCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external_customer_id" })
  externalCustomerId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

export enum CreditLedgerEntryEntryStatusEnum {
    Committed = "committed",
    Pending = "pending"
}

export enum CreditLedgerEntryEntryTypeEnum {
    Increment = "increment",
    Decrement = "decrement",
    ExpirationChange = "expiration_change",
    CreditBlockExpiry = "credit_block_expiry"
}


// CreditLedgerEntry
/** 
 * A credit ledger entry is a single entry in the customer balance ledger. More details about working with real-time balances are [here](../docs/Pre-paid-plans.md).
 * 
 * To support late and out-of-order event reporting, ledger entries are marked as either __committed_ or _pending_. Committed entries are finalized and will not change. Pending entries can be updated up until the event reporting grace period. 
**/
export class CreditLedgerEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=credit_block" })
  creditBlock: CreditLedgerEntryCreditBlock;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer: CreditLedgerEntryCustomer;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=ending_balance" })
  endingBalance: number;

  @SpeakeasyMetadata({ data: "json, name=entry_status" })
  entryStatus: CreditLedgerEntryEntryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=entry_type" })
  entryType: CreditLedgerEntryEntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=event_id" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ledger_sequence_number" })
  ledgerSequenceNumber: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=price_id" })
  priceId?: string;

  @SpeakeasyMetadata({ data: "json, name=starting_balance" })
  startingBalance: number;
}
