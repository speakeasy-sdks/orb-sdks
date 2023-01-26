import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactUpdate
/** 
 * Update a Contact.
**/
export class ContactUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=jobTitle" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}
