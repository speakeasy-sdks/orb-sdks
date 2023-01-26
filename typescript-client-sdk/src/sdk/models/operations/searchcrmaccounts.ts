import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCrmAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class SearchCrmAccountsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annualRevenue" })
  annualRevenue?: shared.NumberFilter;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=industry" })
  industry?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: shared.DateFilter;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=numberOfEmployees" })
  numberOfEmployees?: shared.NumberFilter;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street?: shared.StringFilter;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: shared.StringFilter;
}


export class SearchCrmAccountsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SearchCrmAccountsRequestBodyFilters;
}


export class SearchCrmAccountsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts?: shared.Account[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class SearchCrmAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCrmAccountsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchCrmAccountsRequestBody;
}


export class SearchCrmAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: SearchCrmAccountsResponseBody;
}
