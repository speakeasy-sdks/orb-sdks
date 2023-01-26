import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BooleanFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equals" })
  equals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=not" })
  not?: boolean;
}
