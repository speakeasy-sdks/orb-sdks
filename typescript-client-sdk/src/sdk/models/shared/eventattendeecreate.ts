import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventAttendeeCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=associatedObjectType" })
  associatedObjectType: string;

  @SpeakeasyMetadata({ data: "json, name=associationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
