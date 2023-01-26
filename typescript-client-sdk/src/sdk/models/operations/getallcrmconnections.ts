import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCrmConnectionsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: shared.Connection })
  connections?: shared.Connection[];
}


export class GetAllCrmConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetAllCrmConnectionsResponseBody;
}
