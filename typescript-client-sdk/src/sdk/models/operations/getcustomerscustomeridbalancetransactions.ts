import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCustomersCustomerIdBalanceTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}

export class GetCustomersCustomerIdBalanceTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersCustomerIdBalanceTransactionsPathParams;
}

export class GetCustomersCustomerIdBalanceTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.CustomerBalanceTransaction })
  data?: shared.CustomerBalanceTransaction[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
  paginationMetadata?: Record<string, any>;
}

export class GetCustomersCustomerIdBalanceTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomersCustomerIdBalanceTransactions200ApplicationJSONObject?: GetCustomersCustomerIdBalanceTransactions200ApplicationJSON;
}