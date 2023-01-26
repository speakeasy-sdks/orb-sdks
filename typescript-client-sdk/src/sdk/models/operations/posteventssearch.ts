import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostEventsSearchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_ids" })
  eventIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=invoice_id" })
  invoiceId?: string;
}


// PostEventsSearch200ApplicationJson
/** 
 * An array of events matching the specified search_criteria. If no events match, this array will be empty.
**/
export class PostEventsSearch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Event })
  data?: shared.Event[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
  paginationMetadata?: Record<string, any>;
}


export class PostEventsSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostEventsSearchRequestBody;
}


export class PostEventsSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postEventsSearch200ApplicationJSONObject?: PostEventsSearch200ApplicationJson;
}
