import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "customer_id" })
  customerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "event_name" })
  eventName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_customer_id" })
  externalCustomerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  timestamp: string;
}