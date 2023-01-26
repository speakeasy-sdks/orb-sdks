import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmailUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=isIncoming" })
  isIncoming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ownerUserId" })
  ownerUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
