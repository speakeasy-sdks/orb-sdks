import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class PatchExternalCustomersCustomerIdUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_customer_id" })
  externalCustomerId: string;
}

export class PatchExternalCustomersCustomerIdUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeEnd: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeStart: Date;
}

export class PatchExternalCustomersCustomerIdUsageRequestBodyEvents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "event_name" })
  eventName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  timestamp: string;
}

export class PatchExternalCustomersCustomerIdUsageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PatchExternalCustomersCustomerIdUsageRequestBodyEvents })
  @Expose({ name: "events" })
  @Type(() => PatchExternalCustomersCustomerIdUsageRequestBodyEvents)
  events: PatchExternalCustomersCustomerIdUsageRequestBodyEvents[];
}

export class PatchExternalCustomersCustomerIdUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchExternalCustomersCustomerIdUsagePathParams;

  @SpeakeasyMetadata()
  queryParams: PatchExternalCustomersCustomerIdUsageQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PatchExternalCustomersCustomerIdUsageRequestBody;
}

export class PatchExternalCustomersCustomerIdUsage400ApplicationJSONValidationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validation_errors" })
  validationErrors?: string[];
}

export class PatchExternalCustomersCustomerIdUsage400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;

  @SpeakeasyMetadata({ elemType: PatchExternalCustomersCustomerIdUsage400ApplicationJSONValidationErrors })
  @Expose({ name: "validation_errors" })
  @Type(() => PatchExternalCustomersCustomerIdUsage400ApplicationJSONValidationErrors)
  validationErrors: PatchExternalCustomersCustomerIdUsage400ApplicationJSONValidationErrors[];
}

export class PatchExternalCustomersCustomerIdUsage200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duplicate" })
  duplicate?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "ingested" })
  ingested?: string[];
}

export class PatchExternalCustomersCustomerIdUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchExternalCustomersCustomerIdUsage200ApplicationJSONObject?: PatchExternalCustomersCustomerIdUsage200ApplicationJSON;

  @SpeakeasyMetadata()
  patchExternalCustomersCustomerIdUsage400ApplicationJSONObject?: PatchExternalCustomersCustomerIdUsage400ApplicationJSON;
}