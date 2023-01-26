import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCrmContactApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact: shared.ContactUpdate;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class PutCrmContactRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: PutCrmContactApplicationJson;
}


export class PutCrmContactResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class PutCrmContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PutCrmContactRequests;
}


export class PutCrmContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: PutCrmContactResponseBody;
}
