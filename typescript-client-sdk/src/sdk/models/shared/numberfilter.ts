import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NumberFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equals" })
  equals?: number;

  @SpeakeasyMetadata({ data: "json, name=gt" })
  gt?: number;

  @SpeakeasyMetadata({ data: "json, name=gte" })
  gte?: number;

  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: number[];

  @SpeakeasyMetadata({ data: "json, name=lt" })
  lt?: number;

  @SpeakeasyMetadata({ data: "json, name=lte" })
  lte?: number;

  @SpeakeasyMetadata({ data: "json, name=not" })
  not?: number;

  @SpeakeasyMetadata({ data: "json, name=notIn" })
  notIn?: number[];
}
