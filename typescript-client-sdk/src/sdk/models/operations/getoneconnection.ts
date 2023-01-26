import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneConnectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionId" })
  connectionId: string;
}


export class GetOneConnectionResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: shared.Connection;
}


export class GetOneConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneConnectionQueryParams;
}


export class GetOneConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneConnectionResponseBody;
}
