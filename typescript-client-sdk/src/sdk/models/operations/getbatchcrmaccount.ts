import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchCrmAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;
}


export class GetBatchCrmAccountResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts?: shared.Account[];

  @SpeakeasyMetadata({ data: "json, name=invalidIds" })
  invalidIds?: string[];
}


export class GetBatchCrmAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchCrmAccountQueryParams;
}


export class GetBatchCrmAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetBatchCrmAccountResponseBody;
}
