import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCrmUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAllCrmUsersResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: shared.User })
  users?: shared.User[];
}


export class GetAllCrmUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllCrmUsersQueryParams;
}


export class GetAllCrmUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetAllCrmUsersResponseBody;
}
