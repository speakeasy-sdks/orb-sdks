import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NoteCreate
/** 
 * Create a new Note. You may only associate a note with at most one entity of each type upon creation.
**/
export class NoteCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=contactId" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=dealId" })
  dealId?: string;

  @SpeakeasyMetadata({ data: "json, name=leadId" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
