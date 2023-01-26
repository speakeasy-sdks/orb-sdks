import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=isAllDayEvent" })
  isAllDayEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerUserId" })
  ownerUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
