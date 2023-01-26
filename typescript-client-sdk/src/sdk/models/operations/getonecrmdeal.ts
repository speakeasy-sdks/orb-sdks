import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneCrmDealQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetOneCrmDealResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deal" })
  deal?: shared.Deal;
}


export class GetOneCrmDealRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneCrmDealQueryParams;
}


export class GetOneCrmDealResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneCrmDealResponseBody;
}
