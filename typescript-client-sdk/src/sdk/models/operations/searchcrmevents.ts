import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCrmEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class SearchCrmEventsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=isAllDayEvent" })
  isAllDayEvent?: shared.BooleanFilter;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: shared.StringFilter;
}


export class SearchCrmEventsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SearchCrmEventsRequestBodyFilters;
}


export class SearchCrmEventsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: shared.Event })
  events?: shared.Event[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class SearchCrmEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCrmEventsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchCrmEventsRequestBody;
}


export class SearchCrmEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: SearchCrmEventsResponseBody;
}
