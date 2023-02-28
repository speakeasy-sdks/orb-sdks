import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum PostIngestDebugEnum {
    True = "true",
    False = "false"
}

export class PostIngestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: PostIngestDebugEnum;
}

export class PostIngestRequestBodyEvents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "customer_id" })
  customerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "event_name" })
  eventName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "idempotency_key" })
  idempotencyKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  timestamp: string;
}

export class PostIngestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostIngestRequestBodyEvents })
  @Expose({ name: "events" })
  @Type(() => PostIngestRequestBodyEvents)
  events: PostIngestRequestBodyEvents[];
}

export class PostIngestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostIngestQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostIngestRequestBody;
}

// PostIngest400ApplicationJSONDebug
/** 
 * Optional debug information (only present when debug=true is passed to the endpoint). Contains ingested and duplicate event idempotency keys.
**/
export class PostIngest400ApplicationJSONDebug extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duplicate" })
  duplicate?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "ingested" })
  ingested?: string[];
}

export class PostIngest400ApplicationJSONValidationFailed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validation_errors" })
  validationErrors?: string[];
}

export class PostIngest400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "debug" })
  @Type(() => PostIngest400ApplicationJSONDebug)
  debug?: PostIngest400ApplicationJSONDebug;

  @SpeakeasyMetadata({ elemType: PostIngest400ApplicationJSONValidationFailed })
  @Expose({ name: "validation_failed" })
  @Type(() => PostIngest400ApplicationJSONValidationFailed)
  validationFailed: PostIngest400ApplicationJSONValidationFailed[];
}

// PostIngest200ApplicationJSONDebug
/** 
 * Optional debug information (only present when debug=true is passed to the endpoint). Contains ingested and duplicate event idempotency keys.
**/
export class PostIngest200ApplicationJSONDebug extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duplicate" })
  duplicate?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "ingested" })
  ingested?: string[];
}

export class PostIngest200ApplicationJSONValidationFailed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validation_errors" })
  validationErrors?: Record<string, any>[];
}

export class PostIngest200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "debug" })
  @Type(() => PostIngest200ApplicationJSONDebug)
  debug?: PostIngest200ApplicationJSONDebug;

  @SpeakeasyMetadata({ elemType: PostIngest200ApplicationJSONValidationFailed })
  @Expose({ name: "validation_failed" })
  @Type(() => PostIngest200ApplicationJSONValidationFailed)
  validationFailed: PostIngest200ApplicationJSONValidationFailed[];
}

export class PostIngestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postIngest200ApplicationJSONObject?: PostIngest200ApplicationJSON;

  @SpeakeasyMetadata()
  postIngest400ApplicationJSONObject?: PostIngest400ApplicationJSON;
}