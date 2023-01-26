import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NoteUpdate
/** 
 * Update an existing Note. Please note that updating associations is not currently supported.
**/
export class NoteUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
