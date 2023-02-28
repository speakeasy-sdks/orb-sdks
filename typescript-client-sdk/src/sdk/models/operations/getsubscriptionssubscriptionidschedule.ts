import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetSubscriptionsSubscriptionIdSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}

export class GetSubscriptionsSubscriptionIdScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsSubscriptionIdSchedulePathParams;
}

export class GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONDataPlan extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "plan" })
  @Type(() => GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONDataPlan)
  plan?: GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONDataPlan;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;
}

export class GetSubscriptionsSubscriptionIdSchedule200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONData })
  @Expose({ name: "data" })
  @Type(() => GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONData)
  data?: GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONData[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  paginationMetadata?: Record<string, any>;
}

export class GetSubscriptionsSubscriptionIdScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSubscriptionsSubscriptionIdSchedule200ApplicationJSONObject?: GetSubscriptionsSubscriptionIdSchedule200ApplicationJSON;
}