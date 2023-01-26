import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOneCrmUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allFields" })
  allFields?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetOneCrmUserResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: shared.User;
}


export class GetOneCrmUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOneCrmUserQueryParams;
}


export class GetOneCrmUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: GetOneCrmUserResponseBody;
}
