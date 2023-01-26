import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneCrmNoteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetOneCrmNoteResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: shared.Note;
}


export class GetOneCrmNoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneCrmNoteQueryParams;
}


export class GetOneCrmNoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneCrmNoteResponseBody;
}
