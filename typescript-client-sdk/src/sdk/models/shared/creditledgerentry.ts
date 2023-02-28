import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


// CreditLedgerEntryCreditBlock
/** 
 * Credit block that the entry affected
**/
export class CreditLedgerEntryCreditBlock extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "expiry_date" })
  expiryDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "per_unit_cost_basis" })
  perUnitCostBasis: string;
}

export class CreditLedgerEntryCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "credit_block" })
  @Type(() => CreditLedgerEntryCreditBlock)
  creditBlock: CreditLedgerEntryCreditBlock;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => CreditLedgerEntryCustomer)
  customer: CreditLedgerEntryCustomer;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ending_balance" })
  endingBalance: number;

  @SpeakeasyMetadata()
  @Expose({ name: "entry_status" })
  entryStatus: CreditLedgerEntryEntryStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "entry_type" })
  entryType: CreditLedgerEntryEntryTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "event_id" })
  eventId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ledger_sequence_number" })
  ledgerSequenceNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "price_id" })
  priceId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "starting_balance" })
  startingBalance: number;
}