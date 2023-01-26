import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneCrmEventAttendeeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetOneCrmEventAttendeeResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventAttendee" })
  eventAttendee?: shared.EventAttendee;
}


export class GetOneCrmEventAttendeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneCrmEventAttendeeQueryParams;
}


export class GetOneCrmEventAttendeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneCrmEventAttendeeResponseBody;
}
