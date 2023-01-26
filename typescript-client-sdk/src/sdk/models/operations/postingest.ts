import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostIngestDebugEnum {
    True = "true",
    False = "false"
}


export class PostIngestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: PostIngestDebugEnum;
}


export class PostIngestRequestBodyEvents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=event_name" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;
}


export class PostIngestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: PostIngestRequestBodyEvents })
  events: PostIngestRequestBodyEvents[];
}


// PostIngest200ApplicationJsonDebug
/** 
 * Optional debug information (only present when debug=true is passed to the endpoint). Contains ingested and duplicate event idempotency keys.
**/
export class PostIngest200ApplicationJsonDebug extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicate" })
  duplicate?: string[];

  @SpeakeasyMetadata({ data: "json, name=ingested" })
  ingested?: string[];
}


export class PostIngest200ApplicationJsonValidationFailed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_errors" })
  validationErrors?: Record<string, any>[];
}


export class PostIngest200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: PostIngest200ApplicationJsonDebug;

  @SpeakeasyMetadata({ data: "json, name=validation_failed", elemType: PostIngest200ApplicationJsonValidationFailed })
  validationFailed: PostIngest200ApplicationJsonValidationFailed[];
}


// PostIngest400ApplicationJsonDebug
/** 
 * Optional debug information (only present when debug=true is passed to the endpoint). Contains ingested and duplicate event idempotency keys.
**/
export class PostIngest400ApplicationJsonDebug extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicate" })
  duplicate?: string[];

  @SpeakeasyMetadata({ data: "json, name=ingested" })
  ingested?: string[];
}


export class PostIngest400ApplicationJsonValidationFailed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_errors" })
  validationErrors?: string[];
}


export class PostIngest400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: PostIngest400ApplicationJsonDebug;

  @SpeakeasyMetadata({ data: "json, name=validation_failed", elemType: PostIngest400ApplicationJsonValidationFailed })
  validationFailed: PostIngest400ApplicationJsonValidationFailed[];
}


export class PostIngestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostIngestQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostIngestRequestBody;
}


export class PostIngestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postIngest200ApplicationJSONObject?: PostIngest200ApplicationJson;

  @SpeakeasyMetadata()
  postIngest400ApplicationJSONObject?: PostIngest400ApplicationJson;
}
