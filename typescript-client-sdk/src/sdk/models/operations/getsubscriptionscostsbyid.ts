import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Transform, Type } from "class-transformer";


export class GetSubscriptionsCostsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}

export class GetSubscriptionsCostsByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_by" })
  groupBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view_mode" })
  viewMode?: string;
}

export class GetSubscriptionsCostsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsCostsByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubscriptionsCostsByIdQueryParams;
}

export class GetSubscriptionsCostsById200ApplicationJSONDataPerPriceCostsPriceGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "grouping_key" })
  groupingKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "grouping_value" })
  groupingValue: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secondary_grouping_key" })
  secondaryGroupingKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secondary_grouping_value" })
  secondaryGroupingValue?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: string;
}

// GetSubscriptionsCostsById200ApplicationJSONDataPerPriceCosts
/** 
 * Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
**/
export class GetSubscriptionsCostsById200ApplicationJSONDataPerPriceCosts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "price" })
  @Type(() => shared.Price)
  price?: shared.Price;

  @SpeakeasyMetadata({ elemType: GetSubscriptionsCostsById200ApplicationJSONDataPerPriceCostsPriceGroups })
  @Expose({ name: "price_groups" })
  @Type(() => GetSubscriptionsCostsById200ApplicationJSONDataPerPriceCostsPriceGroups)
  priceGroups: GetSubscriptionsCostsById200ApplicationJSONDataPerPriceCostsPriceGroups[];

  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: string;
}

export class GetSubscriptionsCostsById200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetSubscriptionsCostsById200ApplicationJSONDataPerPriceCosts })
  @Expose({ name: "per_price_costs" })
  @Type(() => GetSubscriptionsCostsById200ApplicationJSONDataPerPriceCosts)
  perPriceCosts: GetSubscriptionsCostsById200ApplicationJSONDataPerPriceCosts[];

  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timeframe_end" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timeframeEnd: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "timeframe_start" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timeframeStart: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: string;
}

export class GetSubscriptionsCostsById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetSubscriptionsCostsById200ApplicationJSONData })
  @Expose({ name: "data" })
  @Type(() => GetSubscriptionsCostsById200ApplicationJSONData)
  data: GetSubscriptionsCostsById200ApplicationJSONData[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  paginationMetadata: Record<string, any>;
}

export class GetSubscriptionsCostsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSubscriptionsCostsById200ApplicationJSONObject?: GetSubscriptionsCostsById200ApplicationJSON;
}