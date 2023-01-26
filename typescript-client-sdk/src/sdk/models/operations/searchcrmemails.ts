import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCrmEmailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class SearchCrmEmailsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bcc" })
  bcc?: shared.StringListFilter;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=bodyHtml" })
  bodyHtml?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=cc" })
  cc?: shared.StringListFilter;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=hasAttachment" })
  hasAttachment?: shared.BooleanFilter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=isBounced" })
  isBounced?: shared.BooleanFilter;

  @SpeakeasyMetadata({ data: "json, name=isIncoming" })
  isIncoming?: shared.BooleanFilter;

  @SpeakeasyMetadata({ data: "json, name=messageDate" })
  messageDate?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: shared.StringListFilter;
}


export class SearchCrmEmailsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SearchCrmEmailsRequestBodyFilters;
}


export class SearchCrmEmailsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: shared.Email[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class SearchCrmEmailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCrmEmailsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchCrmEmailsRequestBody;
}


export class SearchCrmEmailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: SearchCrmEmailsResponseBody;
}
