import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCrmTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class SearchCrmTasksRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=isDone" })
  isDone?: shared.BooleanFilter;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: shared.StringFilter;
}


export class SearchCrmTasksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SearchCrmTasksRequestBodyFilters;
}


export class SearchCrmTasksResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks?: shared.Task[];
}


export class SearchCrmTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCrmTasksQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchCrmTasksRequestBody;
}


export class SearchCrmTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: SearchCrmTasksResponseBody;
}
