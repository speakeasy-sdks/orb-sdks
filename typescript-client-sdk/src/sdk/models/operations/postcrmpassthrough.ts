import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostCrmPassthroughRequestBodyMethodEnum {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE"
}


export class PostCrmPassthroughRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: PostCrmPassthroughRequestBodyMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Record<string, any>;
}


export class PostCrmPassthroughResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: any;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class PostCrmPassthroughRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostCrmPassthroughRequestBody;
}


export class PostCrmPassthroughResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  responseBody?: PostCrmPassthroughResponseBody;
}
