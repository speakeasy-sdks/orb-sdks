import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCrmNotesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAllCrmNotesResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageCursor" })
  nextPageCursor?: string;

  @SpeakeasyMetadata({ data: "json, name=notes", elemType: shared.Note })
  notes?: shared.Note[];
}


export class GetAllCrmNotesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllCrmNotesQueryParams;
}


export class GetAllCrmNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetAllCrmNotesResponseBody;
}
