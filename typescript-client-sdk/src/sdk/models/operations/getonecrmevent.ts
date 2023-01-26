import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneCrmEventQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetOneCrmEventResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: shared.Event;
}


export class GetOneCrmEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneCrmEventQueryParams;
}


export class GetOneCrmEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneCrmEventResponseBody;
}
