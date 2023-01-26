import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventAttendeeAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associationId" })
  associationId: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId: string;
}


// EventAttendee
/** 
 * Event Attendees hold information about someone who attendeed or was invited to an event. Attendees are always associated with some Event and another person object such as a Contact, Lead, or Other.
**/
export class EventAttendee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=associatedObjectType" })
  associatedObjectType: string;

  @SpeakeasyMetadata({ data: "json, name=associations" })
  associations: EventAttendeeAssociations;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
