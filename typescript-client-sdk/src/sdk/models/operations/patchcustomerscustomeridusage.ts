import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchCustomersCustomerIdUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}

export class PatchCustomersCustomerIdUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end" })
  timeframeEnd: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start" })
  timeframeStart: Date;
}

export class PatchCustomersCustomerIdUsageRequestBodyEvents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_name" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;
}

export class PatchCustomersCustomerIdUsageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: PatchCustomersCustomerIdUsageRequestBodyEvents })
  events: PatchCustomersCustomerIdUsageRequestBodyEvents[];
}

export class PatchCustomersCustomerIdUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchCustomersCustomerIdUsagePathParams;

  @SpeakeasyMetadata()
  queryParams: PatchCustomersCustomerIdUsageQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PatchCustomersCustomerIdUsageRequestBody;
}

export class PatchCustomersCustomerIdUsage400ApplicationJSONValidationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_errors" })
  validationErrors?: string[];
}

export class PatchCustomersCustomerIdUsage400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=validation_errors", elemType: PatchCustomersCustomerIdUsage400ApplicationJSONValidationErrors })
  validationErrors: PatchCustomersCustomerIdUsage400ApplicationJSONValidationErrors[];
}

export class PatchCustomersCustomerIdUsage200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicate" })
  duplicate?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=ingested" })
  ingested?: string[];
}

export class PatchCustomersCustomerIdUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchCustomersCustomerIdUsage200ApplicationJSONObject?: PatchCustomersCustomerIdUsage200ApplicationJSON;

  @SpeakeasyMetadata()
  patchCustomersCustomerIdUsage400ApplicationJSONObject?: PatchCustomersCustomerIdUsage400ApplicationJSON;
}