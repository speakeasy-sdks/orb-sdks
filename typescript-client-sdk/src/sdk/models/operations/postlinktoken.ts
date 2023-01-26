import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLinkTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  vesselAPIToken: shared.SchemeVesselApiToken;
}


export class PostLinkTokenResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkToken" })
  linkToken?: string;
}


export class PostLinkTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PostLinkTokenSecurity;
}


export class PostLinkTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: PostLinkTokenResponseBody;
}
