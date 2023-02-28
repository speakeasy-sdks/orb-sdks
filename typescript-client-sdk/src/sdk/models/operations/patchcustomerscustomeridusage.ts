import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class PatchCustomersCustomerIdUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}

export class PatchCustomersCustomerIdUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeEnd: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeStart: Date;
}

export class PatchCustomersCustomerIdUsageRequestBodyEvents extends SpeakeasyBase {
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

export class PatchCustomersCustomerIdUsageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PatchCustomersCustomerIdUsageRequestBodyEvents })
  @Expose({ name: "events" })
  @Type(() => PatchCustomersCustomerIdUsageRequestBodyEvents)
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
  @SpeakeasyMetadata()
  @Expose({ name: "idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validation_errors" })
  validationErrors?: string[];
}

export class PatchCustomersCustomerIdUsage400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;

  @SpeakeasyMetadata({ elemType: PatchCustomersCustomerIdUsage400ApplicationJSONValidationErrors })
  @Expose({ name: "validation_errors" })
  @Type(() => PatchCustomersCustomerIdUsage400ApplicationJSONValidationErrors)
  validationErrors: PatchCustomersCustomerIdUsage400ApplicationJSONValidationErrors[];
}

export class PatchCustomersCustomerIdUsage200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duplicate" })
  duplicate?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "ingested" })
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