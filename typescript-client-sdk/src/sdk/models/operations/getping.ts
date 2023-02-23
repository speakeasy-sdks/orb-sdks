import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetPing200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=response" })
  response: string;
}

export class GetPingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPing200ApplicationJSONObject?: GetPing200ApplicationJSON;
}