import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostEventsSearchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "event_ids" })
  eventIds?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "invoice_id" })
  invoiceId?: string;
}

export class PostEventsSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostEventsSearchRequestBody;
}

// PostEventsSearch200ApplicationJSON
/** 
 * An array of events matching the specified search_criteria. If no events match, this array will be empty.
**/
export class PostEventsSearch200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Event })
  @Expose({ name: "data" })
  @Type(() => shared.Event)
  data?: shared.Event[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  paginationMetadata?: Record<string, any>;
}

export class PostEventsSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postEventsSearch200ApplicationJSONObject?: PostEventsSearch200ApplicationJSON;
}