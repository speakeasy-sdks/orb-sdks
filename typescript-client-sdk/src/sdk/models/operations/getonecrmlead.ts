import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneCrmLeadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetOneCrmLeadResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lead" })
  lead?: shared.Lead;
}


export class GetOneCrmLeadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneCrmLeadQueryParams;
}


export class GetOneCrmLeadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneCrmLeadResponseBody;
}
