import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchCrmDealQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;
}


export class GetBatchCrmDealResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deals", elemType: shared.Deal })
  deals?: shared.Deal[];

  @SpeakeasyMetadata({ data: "json, name=invalidIds" })
  invalidIds?: string[];
}


export class GetBatchCrmDealRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchCrmDealQueryParams;
}


export class GetBatchCrmDealResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetBatchCrmDealResponseBody;
}
