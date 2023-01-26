import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchCrmLeadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;
}


export class GetBatchCrmLeadResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invalidIds" })
  invalidIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=leads", elemType: shared.Lead })
  leads?: shared.Lead[];
}


export class GetBatchCrmLeadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchCrmLeadQueryParams;
}


export class GetBatchCrmLeadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetBatchCrmLeadResponseBody;
}
