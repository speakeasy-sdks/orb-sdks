import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StringFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contains" })
  contains?: string;

  @SpeakeasyMetadata({ data: "json, name=endsWith" })
  endsWith?: string;

  @SpeakeasyMetadata({ data: "json, name=equals" })
  equals?: string;

  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: string[];

  @SpeakeasyMetadata({ data: "json, name=not" })
  not?: string;

  @SpeakeasyMetadata({ data: "json, name=notIn" })
  notIn?: string[];

  @SpeakeasyMetadata({ data: "json, name=startsWith" })
  startsWith?: string;
}
