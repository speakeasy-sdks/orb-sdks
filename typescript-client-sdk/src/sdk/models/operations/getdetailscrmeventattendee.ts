import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDetailsCrmEventAttendeeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;
}


export class GetDetailsCrmEventAttendeeResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: shared.Field })
  fields?: shared.Field[];

  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;
}


export class GetDetailsCrmEventAttendeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDetailsCrmEventAttendeeQueryParams;
}


export class GetDetailsCrmEventAttendeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetDetailsCrmEventAttendeeResponseBody;
}
