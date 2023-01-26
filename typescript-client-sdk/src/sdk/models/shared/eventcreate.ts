import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=contactId" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=dealId" })
  dealId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime: string;

  @SpeakeasyMetadata({ data: "json, name=isAllDayEvent" })
  isAllDayEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=leadId" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerUserId" })
  ownerUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
