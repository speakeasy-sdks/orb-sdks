import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PutEventsDeprecateEventIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
  eventId: string;
}

export class PutEventsDeprecateEventIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEventsDeprecateEventIdPathParams;
}

export class PutEventsDeprecateEventId400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_errors" })
  validationErrors?: string[];
}

export class PutEventsDeprecateEventId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated?: string;
}

export class PutEventsDeprecateEventIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putEventsDeprecateEventId200ApplicationJSONObject?: PutEventsDeprecateEventId200ApplicationJSON;

  @SpeakeasyMetadata()
  putEventsDeprecateEventId400ApplicationJSONObject?: PutEventsDeprecateEventId400ApplicationJSON;
}