import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCrmEventAttendeesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAllCrmEventAttendeesResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventAttendees", elemType: shared.EventAttendee })
  eventAttendees?: shared.EventAttendee[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class GetAllCrmEventAttendeesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllCrmEventAttendeesQueryParams;
}


export class GetAllCrmEventAttendeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetAllCrmEventAttendeesResponseBody;
}
