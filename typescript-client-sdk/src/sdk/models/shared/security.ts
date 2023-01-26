import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeVesselApiToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=vessel-api-token" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  vesselAPIToken: SchemeVesselApiToken;
}
