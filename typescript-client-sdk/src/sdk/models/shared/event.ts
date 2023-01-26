import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds: string[];

  @SpeakeasyMetadata({ data: "json, name=contactIds" })
  contactIds: string[];

  @SpeakeasyMetadata({ data: "json, name=dealIds" })
  dealIds: string[];

  @SpeakeasyMetadata({ data: "json, name=eventAttendeeIds" })
  eventAttendeeIds: string[];

  @SpeakeasyMetadata({ data: "json, name=leadIds" })
  leadIds: string[];

  @SpeakeasyMetadata({ data: "json, name=ownerUserId" })
  ownerUserId: string;
}


// Event
/** 
 * Events are a type of activity that has attendees and takes place at a certain point in time (i.e., has a start and end date).
 * For the currently supported CRMs, these are the objects Events most closely maps to:
 * - Salesforce = Events
 * - HubSpot = Meetings
 * - Pipedrive = Activities
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=associations" })
  associations: EventAssociations;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isAllDayEvent" })
  isAllDayEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
