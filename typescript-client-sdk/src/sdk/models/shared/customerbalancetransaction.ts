import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// CustomerBalanceTransaction
/** 
 * A single change to the customer balance. All amounts are in the customer's currency.
**/
export class CustomerBalanceTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CustomerBalanceTransactionActionEnum;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=ending_balance" })
  endingBalance: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice: CustomerBalanceTransactionInvoice;

  @SpeakeasyMetadata({ data: "json, name=starting_balance" })
  startingBalance: string;
}