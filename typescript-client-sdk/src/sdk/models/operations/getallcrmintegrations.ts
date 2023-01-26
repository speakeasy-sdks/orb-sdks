import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCrmIntegrationsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrations", elemType: shared.Integration })
  integrations?: shared.Integration[];
}


export class GetAllCrmIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetAllCrmIntegrationsResponseBody;
}
