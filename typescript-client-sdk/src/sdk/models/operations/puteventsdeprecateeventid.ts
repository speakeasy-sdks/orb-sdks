import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class PutEventsDeprecateEventIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
  eventId: string;
}

export class PutEventsDeprecateEventIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEventsDeprecateEventIdPathParams;
}

export class PutEventsDeprecateEventId400ApplicationJSON extends SpeakeasyBase {
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

export class PutEventsDeprecateEventId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deprecated" })
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