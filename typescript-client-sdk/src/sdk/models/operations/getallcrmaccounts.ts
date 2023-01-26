import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCrmAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAllCrmAccountsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts?: shared.Account[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class GetAllCrmAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllCrmAccountsQueryParams;
}


export class GetAllCrmAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetAllCrmAccountsResponseBody;
}
