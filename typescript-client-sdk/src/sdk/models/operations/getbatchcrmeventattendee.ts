import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchCrmEventAttendeeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;
}


export class GetBatchCrmEventAttendeeResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventAttendees", elemType: shared.EventAttendee })
  eventAttendees?: shared.EventAttendee[];

  @SpeakeasyMetadata({ data: "json, name=invalidIds" })
  invalidIds?: string[];
}


export class GetBatchCrmEventAttendeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchCrmEventAttendeeQueryParams;
}


export class GetBatchCrmEventAttendeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetBatchCrmEventAttendeeResponseBody;
}
