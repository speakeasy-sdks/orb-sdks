import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetInvoicesUpcomingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subscription_id" })
  subscriptionId: string;
}

export class GetInvoicesUpcomingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInvoicesUpcomingQueryParams;
}

export class GetInvoicesUpcomingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  upcomingPercent20Invoice?: shared.UpcomingPercent20Invoice;
}