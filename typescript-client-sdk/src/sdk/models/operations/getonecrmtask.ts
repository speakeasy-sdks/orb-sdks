import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneCrmTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetOneCrmTaskResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: shared.Task;
}


export class GetOneCrmTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneCrmTaskQueryParams;
}


export class GetOneCrmTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneCrmTaskResponseBody;
}
