import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContactAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds: string[];

  @SpeakeasyMetadata({ data: "json, name=dealIds" })
  dealIds: string[];

  @SpeakeasyMetadata({ data: "json, name=eventAttendeeIds" })
  eventAttendeeIds: string[];

  @SpeakeasyMetadata({ data: "json, name=eventIds" })
  eventIds: string[];

  @SpeakeasyMetadata({ data: "json, name=leadIds" })
  leadIds: string[];

  @SpeakeasyMetadata({ data: "json, name=noteIds" })
  noteIds: string[];

  @SpeakeasyMetadata({ data: "json, name=taskIds" })
  taskIds: string[];
}


// Contact
/** 
 * Information about an individual affiliated with another CRM Object (e.g., a Lead, a Deal, etc)
**/
export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=associations" })
  associations: ContactAssociations;

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
