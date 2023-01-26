import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=contactId" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=dealId" })
  dealId?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=isDone" })
  isDone?: boolean;

  @SpeakeasyMetadata({ data: "json, name=leadId" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
