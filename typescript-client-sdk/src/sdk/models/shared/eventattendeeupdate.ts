import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventAttendeeUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
