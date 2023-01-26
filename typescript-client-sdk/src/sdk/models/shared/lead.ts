import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LeadAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds: string[];

  @SpeakeasyMetadata({ data: "json, name=contactIds" })
  contactIds: string[];

  @SpeakeasyMetadata({ data: "json, name=eventAttendeeIds" })
  eventAttendeeIds: string[];

  @SpeakeasyMetadata({ data: "json, name=eventIds" })
  eventIds: string[];

  @SpeakeasyMetadata({ data: "json, name=noteIds" })
  noteIds: string[];

  @SpeakeasyMetadata({ data: "json, name=taskIds" })
  taskIds: string[];
}


// Lead
/** 
 * A Lead represents an individual, or sometimes an organization, that is interested in purchasing your product (i.e., is a potential Deal). 
 * *CRM Caveats*:
 * - HubSpot: we consider contacts with the `leadStatus` set to be leads.
**/
export class Lead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=associations" })
  associations: LeadAssociations;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=jobTitle" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}
