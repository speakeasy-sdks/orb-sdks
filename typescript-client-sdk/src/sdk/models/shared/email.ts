import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmailAssociations extends SpeakeasyBase {
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


// Email
/** 
 * An email is a message sent from one person to another through an email service. Emails involve participants - the person who the email was sent to, or the person that sent it. Participants are usually a Contact, Lead, or User but in certain CRMs, can be a person not yet associated with a CRM object.
**/
export class Email extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=associations" })
  associations: EmailAssociations;

  @SpeakeasyMetadata({ data: "json, name=bcc" })
  bcc?: string[];

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=bodyHtml" })
  bodyHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=cc" })
  cc?: string[];

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=hasAttachment" })
  hasAttachment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isBounced" })
  isBounced?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isIncoming" })
  isIncoming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messageDate" })
  messageDate?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string[];
}
