import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCustomers200ApplicationJSONPaginationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=has_more" })
  hasMore: boolean;

  @SpeakeasyMetadata({ data: "json, name=next_cursor" })
  nextCursor: string;
}

export class GetCustomers200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Customer })
  data: shared.Customer[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
  paginationMetadata: GetCustomers200ApplicationJSONPaginationMetadata;
}

export class GetCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomers200ApplicationJSONObject?: GetCustomers200ApplicationJSON;
}