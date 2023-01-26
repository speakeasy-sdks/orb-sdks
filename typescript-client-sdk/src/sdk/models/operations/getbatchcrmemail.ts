import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchCrmEmailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;
}


export class GetBatchCrmEmailResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: shared.Email[];

  @SpeakeasyMetadata({ data: "json, name=invalidIds" })
  invalidIds?: string[];
}


export class GetBatchCrmEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchCrmEmailQueryParams;
}


export class GetBatchCrmEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetBatchCrmEmailResponseBody;
}
