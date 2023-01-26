import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCrmNotesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class SearchCrmNotesRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=contentHtml" })
  contentHtml?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=contentText" })
  contentText?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId?: shared.StringFilter;
}


export class SearchCrmNotesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SearchCrmNotesRequestBodyFilters;
}


export class SearchCrmNotesResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;

  @SpeakeasyMetadata({ data: "json, name=notes", elemType: shared.Note })
  notes?: shared.Note[];
}


export class SearchCrmNotesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCrmNotesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchCrmNotesRequestBody;
}


export class SearchCrmNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: SearchCrmNotesResponseBody;
}
