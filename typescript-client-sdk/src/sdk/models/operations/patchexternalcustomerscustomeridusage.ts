import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchExternalCustomersCustomerIdUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_customer_id" })
  externalCustomerId: string;
}


export class PatchExternalCustomersCustomerIdUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end" })
  timeframeEnd: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start" })
  timeframeStart: Date;
}


export class PatchExternalCustomersCustomerIdUsageRequestBodyEvents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_name" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;
}


export class PatchExternalCustomersCustomerIdUsageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: PatchExternalCustomersCustomerIdUsageRequestBodyEvents })
  events: PatchExternalCustomersCustomerIdUsageRequestBodyEvents[];
}


export class PatchExternalCustomersCustomerIdUsage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicate" })
  duplicate?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=ingested" })
  ingested?: string[];
}


export class PatchExternalCustomersCustomerIdUsage400ApplicationJsonValidationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_errors" })
  validationErrors?: string[];
}


export class PatchExternalCustomersCustomerIdUsage400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=validation_errors", elemType: PatchExternalCustomersCustomerIdUsage400ApplicationJsonValidationErrors })
  validationErrors: PatchExternalCustomersCustomerIdUsage400ApplicationJsonValidationErrors[];
}


export class PatchExternalCustomersCustomerIdUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchExternalCustomersCustomerIdUsagePathParams;

  @SpeakeasyMetadata()
  queryParams: PatchExternalCustomersCustomerIdUsageQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PatchExternalCustomersCustomerIdUsageRequestBody;
}


export class PatchExternalCustomersCustomerIdUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchExternalCustomersCustomerIdUsage200ApplicationJSONObject?: PatchExternalCustomersCustomerIdUsage200ApplicationJson;

  @SpeakeasyMetadata()
  patchExternalCustomersCustomerIdUsage400ApplicationJSONObject?: PatchExternalCustomersCustomerIdUsage400ApplicationJson;
}
