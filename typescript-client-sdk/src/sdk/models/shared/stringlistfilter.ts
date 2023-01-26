import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StringListFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=has" })
  has?: string;

  @SpeakeasyMetadata({ data: "json, name=hasEvery" })
  hasEvery?: string[];

  @SpeakeasyMetadata({ data: "json, name=hasSome" })
  hasSome?: string[];

  @SpeakeasyMetadata({ data: "json, name=isEmpty" })
  isEmpty?: boolean;
}
