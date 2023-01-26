import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailCreateContact
/** 
 * Associated Contacts must participate in the email (i.e., have a role).
**/
export class EmailCreateContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: any;
}


// EmailCreateLead
/** 
 * Associated Leads must participate in the email (i.e., have a role).
**/
export class EmailCreateLead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: any;
}


export class EmailCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=bcc" })
  bcc?: string[];

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=bodyHtml" })
  bodyHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=cc" })
  cc?: string[];

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: EmailCreateContact;

  @SpeakeasyMetadata({ data: "json, name=dealId" })
  dealId?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=isIncoming" })
  isIncoming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lead" })
  lead?: EmailCreateLead;

  @SpeakeasyMetadata({ data: "json, name=messageDate" })
  messageDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerUserId" })
  ownerUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string[];
}
