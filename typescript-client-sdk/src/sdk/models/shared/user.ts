import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds: string[];

  @SpeakeasyMetadata({ data: "json, name=dealIds" })
  dealIds: string[];

  @SpeakeasyMetadata({ data: "json, name=eventIds" })
  eventIds: string[];

  @SpeakeasyMetadata({ data: "json, name=noteIds" })
  noteIds: string[];

  @SpeakeasyMetadata({ data: "json, name=taskIds" })
  taskIds: string[];
}


// User
/** 
 * Users of the connected CRM platform. These are *not* the contacts or leads, but rather the user accounts from the connected CRM.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=associations" })
  associations: UserAssociations;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId: string;
}
