import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCrmLeadsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class SearchCrmLeadsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=jobTitle" })
  jobTitle?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=mobilePhone" })
  mobilePhone?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: shared.StringFilter;
}


export class SearchCrmLeadsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SearchCrmLeadsRequestBodyFilters;
}


export class SearchCrmLeadsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=leads", elemType: shared.Lead })
  leads?: shared.Lead[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class SearchCrmLeadsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCrmLeadsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchCrmLeadsRequestBody;
}


export class SearchCrmLeadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: SearchCrmLeadsResponseBody;
}
