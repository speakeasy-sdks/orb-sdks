import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCrmUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class SearchCrmUsersRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId?: shared.StringFilter;
}


export class SearchCrmUsersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SearchCrmUsersRequestBodyFilters;
}


export class SearchCrmUsersResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: shared.User })
  users?: shared.User[];
}


export class SearchCrmUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCrmUsersQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchCrmUsersRequestBody;
}


export class SearchCrmUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: SearchCrmUsersResponseBody;
}
