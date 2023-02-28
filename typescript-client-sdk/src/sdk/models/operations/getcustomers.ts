import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class GetCustomers200ApplicationJSONPaginationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "has_more" })
  hasMore: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "next_cursor" })
  nextCursor: string;
}

export class GetCustomers200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Customer })
  @Expose({ name: "data" })
  @Type(() => shared.Customer)
  data: shared.Customer[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  @Type(() => GetCustomers200ApplicationJSONPaginationMetadata)
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