import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchCrmUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;
}


export class GetBatchCrmUserResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invalidIds" })
  invalidIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: shared.User })
  users?: shared.User[];
}


export class GetBatchCrmUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchCrmUserQueryParams;
}


export class GetBatchCrmUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetBatchCrmUserResponseBody;
}
