import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchCrmEventQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;
}


export class GetBatchCrmEventResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: shared.Event })
  events?: shared.Event[];

  @SpeakeasyMetadata({ data: "json, name=invalidIds" })
  invalidIds?: string[];
}


export class GetBatchCrmEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchCrmEventQueryParams;
}


export class GetBatchCrmEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetBatchCrmEventResponseBody;
}
