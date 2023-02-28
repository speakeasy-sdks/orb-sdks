import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class PutEventsEventIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
  eventId: string;
}

export class PutEventsEventIdRequestBody extends SpeakeasyBase {
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
  @Expose({ name: "properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp: Date;
}

export class PutEventsEventIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEventsEventIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutEventsEventIdRequestBody;
}

export class PutEventsEventId400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validation_errors" })
  validationErrors?: string[];
}

export class PutEventsEventId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amended" })
  amended?: string;
}

export class PutEventsEventIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putEventsEventId200ApplicationJSONObject?: PutEventsEventId200ApplicationJSON;

  @SpeakeasyMetadata()
  putEventsEventId400ApplicationJSONObject?: PutEventsEventId400ApplicationJSON;
}