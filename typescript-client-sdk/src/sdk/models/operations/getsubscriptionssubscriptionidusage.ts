import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Transform, Type } from "class-transformer";


export class GetSubscriptionsSubscriptionIdUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}
export enum GetSubscriptionsSubscriptionIdUsageGranularityEnum {
    Day = "day"
}
export enum GetSubscriptionsSubscriptionIdUsageViewModeEnum {
    Periodic = "periodic",
    Cumulative = "cumulative"
}

export class GetSubscriptionsSubscriptionIdUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=billable_metric_id" })
  billableMetricId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=granularity" })
  granularity?: GetSubscriptionsSubscriptionIdUsageGranularityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_by" })
  groupBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view_mode" })
  viewMode?: GetSubscriptionsSubscriptionIdUsageViewModeEnum;
}

export class GetSubscriptionsSubscriptionIdUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsSubscriptionIdUsagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubscriptionsSubscriptionIdUsageQueryParams;
}

export class GetSubscriptionsSubscriptionIdUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}