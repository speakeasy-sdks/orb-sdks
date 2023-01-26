import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneCrmAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetOneCrmAccountResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: shared.Account;
}


export class GetOneCrmAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneCrmAccountQueryParams;
}


export class GetOneCrmAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneCrmAccountResponseBody;
}
