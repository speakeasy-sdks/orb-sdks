import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class GetCustomersCustomerIdCreditsLedgerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}
export enum GetCustomersCustomerIdCreditsLedgerEntryStatusEnum {
    Committed = "committed",
    Pending = "pending"
}
export enum GetCustomersCustomerIdCreditsLedgerEntryTypeEnum {
    Increment = "increment",
    Decrement = "decrement",
    ExpirationChange = "expiration_change",
    CreditBlockExpiry = "credit_block_expiry"
}

export class GetCustomersCustomerIdCreditsLedgerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entry_status" })
  entryStatus?: GetCustomersCustomerIdCreditsLedgerEntryStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entry_type" })
  entryType?: GetCustomersCustomerIdCreditsLedgerEntryTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimum_amount" })
  minimumAmount?: number;
}

export class GetCustomersCustomerIdCreditsLedgerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersCustomerIdCreditsLedgerPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomersCustomerIdCreditsLedgerQueryParams;
}

export class GetCustomersCustomerIdCreditsLedger200ApplicationJSONPaginationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "has_more" })
  hasMore: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "next_cursor" })
  nextCursor: string;
}

export class GetCustomersCustomerIdCreditsLedger200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CreditLedgerEntry })
  @Expose({ name: "data" })
  @Type(() => shared.CreditLedgerEntry)
  data: shared.CreditLedgerEntry[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  @Type(() => GetCustomersCustomerIdCreditsLedger200ApplicationJSONPaginationMetadata)
  paginationMetadata: GetCustomersCustomerIdCreditsLedger200ApplicationJSONPaginationMetadata;
}

export class GetCustomersCustomerIdCreditsLedgerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomersCustomerIdCreditsLedger200ApplicationJSONObject?: GetCustomersCustomerIdCreditsLedger200ApplicationJSON;
}