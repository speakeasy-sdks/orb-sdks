import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds: string[];

  @SpeakeasyMetadata({ data: "json, name=contactIds" })
  contactIds: string[];

  @SpeakeasyMetadata({ data: "json, name=dealIds" })
  dealIds: string[];

  @SpeakeasyMetadata({ data: "json, name=leadIds" })
  leadIds: string[];

  @SpeakeasyMetadata({ data: "json, name=ownerUserId" })
  ownerUserId: string;
}


// Task
/** 
 * A task attached to some CRM object
**/
export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=associations" })
  associations: TaskAssociations;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isDone" })
  isDone?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
