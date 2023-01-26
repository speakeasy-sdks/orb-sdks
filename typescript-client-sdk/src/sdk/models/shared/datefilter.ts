import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DateFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equals" })
  equals?: string;

  @SpeakeasyMetadata({ data: "json, name=gt" })
  gt?: string;

  @SpeakeasyMetadata({ data: "json, name=gte" })
  gte?: string;

  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: string[];

  @SpeakeasyMetadata({ data: "json, name=lt" })
  lt?: string;

  @SpeakeasyMetadata({ data: "json, name=lte" })
  lte?: string;

  @SpeakeasyMetadata({ data: "json, name=not" })
  not?: string;

  @SpeakeasyMetadata({ data: "json, name=notIn" })
  notIn?: string[];
}
