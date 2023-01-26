import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneWebhookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=webhookId" })
  webhookId?: string;
}


export class GetOneWebhookResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: shared.WebhookMetadata;
}


export class GetOneWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneWebhookQueryParams;
}


export class GetOneWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneWebhookResponseBody;
}
