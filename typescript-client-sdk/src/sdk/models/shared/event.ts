import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId: string;

  @SpeakeasyMetadata({ data: "json, name=event_name" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;
}
