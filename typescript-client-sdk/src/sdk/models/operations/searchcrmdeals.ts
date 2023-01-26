import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCrmDealsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class SearchCrmDealsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: shared.NumberFilter;

  @SpeakeasyMetadata({ data: "json, name=closeDate" })
  closeDate?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=expectedRevenue" })
  expectedRevenue?: shared.NumberFilter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=isClosed" })
  isClosed?: shared.BooleanFilter;

  @SpeakeasyMetadata({ data: "json, name=isWon" })
  isWon?: shared.BooleanFilter;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=probability" })
  probability?: shared.NumberFilter;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: shared.StringFilter;
}


export class SearchCrmDealsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SearchCrmDealsRequestBodyFilters;
}


export class SearchCrmDealsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deals", elemType: shared.Deal })
  deals?: shared.Deal[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class SearchCrmDealsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCrmDealsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchCrmDealsRequestBody;
}


export class SearchCrmDealsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: SearchCrmDealsResponseBody;
}
