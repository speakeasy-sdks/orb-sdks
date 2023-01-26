import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCrmEventAttendeesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class SearchCrmEventAttendeesRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedObjectType" })
  associatedObjectType?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: shared.StringFilter;
}


export class SearchCrmEventAttendeesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SearchCrmEventAttendeesRequestBodyFilters;
}


export class SearchCrmEventAttendeesResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventAttendees", elemType: shared.EventAttendee })
  eventAttendees?: shared.EventAttendee[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class SearchCrmEventAttendeesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCrmEventAttendeesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchCrmEventAttendeesRequestBody;
}


export class SearchCrmEventAttendeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: SearchCrmEventAttendeesResponseBody;
}
