import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetInvoicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subscription_id" })
  subscriptionId?: string;
}

export class GetInvoicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInvoicesQueryParams;
}

export class GetInvoices200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Invoice })
  data?: shared.Invoice[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
  paginationMetadata?: Record<string, any>;
}

export class GetInvoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInvoices200ApplicationJSONObject?: GetInvoices200ApplicationJSON;
}