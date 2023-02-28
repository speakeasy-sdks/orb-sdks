import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export enum CustomerBalanceTransactionActionEnum {
    AppliedToInvoice = "applied_to_invoice",
    ProratedRefund = "prorated_refund",
    ManualAdjustment = "manual_adjustment"
}

// CustomerBalanceTransactionInvoice
/** 
 * The Invoice associated with this transaction
**/
export class CustomerBalanceTransactionInvoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// CustomerBalanceTransaction
/** 
 * A single change to the customer balance. All amounts are in the customer's currency.
**/
export class CustomerBalanceTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: CustomerBalanceTransactionActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ending_balance" })
  endingBalance: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoice" })
  @Type(() => CustomerBalanceTransactionInvoice)
  invoice: CustomerBalanceTransactionInvoice;

  @SpeakeasyMetadata()
  @Expose({ name: "starting_balance" })
  startingBalance: string;
}