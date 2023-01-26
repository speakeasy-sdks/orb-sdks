import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCrmContactsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAllCrmContactsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: shared.Contact })
  contacts?: shared.Contact[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class GetAllCrmContactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllCrmContactsQueryParams;
}


export class GetAllCrmContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetAllCrmContactsResponseBody;
}
