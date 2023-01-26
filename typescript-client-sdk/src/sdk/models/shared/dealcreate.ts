import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DealCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=closeDate" })
  closeDate: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=probability" })
  probability?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: string;
}
