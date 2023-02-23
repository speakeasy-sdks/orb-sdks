import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PutEventsEventIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
  eventId: string;
}

export class PutEventsEventIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=event_name" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}

export class PutEventsEventIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEventsEventIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutEventsEventIdRequestBody;
}

export class PutEventsEventId400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_errors" })
  validationErrors?: string[];
}

export class PutEventsEventId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amended" })
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