import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLinkExchangeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicToken" })
  publicToken: string;
}


export class PostLinkExchangeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  vesselAPIToken: shared.SchemeVesselApiToken;
}

export enum PostLinkExchangeResponseBodyIntegrationIdEnum {
    Salesforce = "salesforce",
    Hubspot = "hubspot",
    Pipedrive = "pipedrive"
}


export class PostLinkExchangeResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId: PostLinkExchangeResponseBodyIntegrationIdEnum;

  @SpeakeasyMetadata({ data: "json, name=nativeOrgId" })
  nativeOrgId: string;

  @SpeakeasyMetadata({ data: "json, name=nativeOrgURL" })
  nativeOrgURL: string;
}


export class PostLinkExchangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostLinkExchangeRequestBody;

  @SpeakeasyMetadata()
  security: PostLinkExchangeSecurity;
}


export class PostLinkExchangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: PostLinkExchangeResponseBody;
}
