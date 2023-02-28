import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Transform, Type } from "class-transformer";


export class GetCustomerCostsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_customer_id" })
  externalCustomerId: string;
}
export enum GetCustomerCostsViewModeEnum {
    Periodic = "periodic",
    Cumulative = "cumulative"
}

export class GetCustomerCostsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_by" })
  groupBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end" })
  timeframeEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view_mode" })
  viewMode?: GetCustomerCostsViewModeEnum;
}

export class GetCustomerCostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomerCostsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomerCostsQueryParams;
}

export class GetCustomerCosts200ApplicationJSONDataPerPriceCostsPriceGroups extends SpeakeasyBase {
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

// GetCustomerCosts200ApplicationJSONDataPerPriceCosts
/** 
 * Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
**/
export class GetCustomerCosts200ApplicationJSONDataPerPriceCosts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "price" })
  @Type(() => shared.Price)
  price?: shared.Price;

  @SpeakeasyMetadata({ elemType: GetCustomerCosts200ApplicationJSONDataPerPriceCostsPriceGroups })
  @Expose({ name: "price_groups" })
  @Type(() => GetCustomerCosts200ApplicationJSONDataPerPriceCostsPriceGroups)
  priceGroups: GetCustomerCosts200ApplicationJSONDataPerPriceCostsPriceGroups[];

  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: string;
}

export class GetCustomerCosts200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCustomerCosts200ApplicationJSONDataPerPriceCosts })
  @Expose({ name: "per_price_costs" })
  @Type(() => GetCustomerCosts200ApplicationJSONDataPerPriceCosts)
  perPriceCosts: GetCustomerCosts200ApplicationJSONDataPerPriceCosts[];

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

export class GetCustomerCosts200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCustomerCosts200ApplicationJSONData })
  @Expose({ name: "data" })
  @Type(() => GetCustomerCosts200ApplicationJSONData)
  data: GetCustomerCosts200ApplicationJSONData[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  paginationMetadata: Record<string, any>;
}

export class GetCustomerCostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomerCosts200ApplicationJSONObject?: GetCustomerCosts200ApplicationJSON;
}