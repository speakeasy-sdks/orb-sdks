import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetSubscriptionsSubscriptionIdSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}

export class GetSubscriptionsSubscriptionIdScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsSubscriptionIdSchedulePathParams;
}

export class GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONDataPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONDataPlan;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;
}

export class GetSubscriptionsSubscriptionIdSchedule200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONData })
  data?: GetSubscriptionsSubscriptionIdSchedule200ApplicationJSONData[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
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