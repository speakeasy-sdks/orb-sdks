import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Transform, Type } from "class-transformer";


export class GetCustomerCostsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}
export enum GetCustomerCostsByIdViewModeEnum {
    Periodic = "periodic",
    Cumulative = "cumulative"
}

export class GetCustomerCostsByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_by" })
  groupBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end" })
  timeframeEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  timeframeStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view_mode" })
  viewMode?: GetCustomerCostsByIdViewModeEnum;
}

export class GetCustomerCostsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomerCostsByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomerCostsByIdQueryParams;
}

export class GetCustomerCostsById200ApplicationJSONDataPerPriceCostsPriceGroups extends SpeakeasyBase {
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

// GetCustomerCostsById200ApplicationJSONDataPerPriceCosts
/** 
 * Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
**/
export class GetCustomerCostsById200ApplicationJSONDataPerPriceCosts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "price" })
  @Type(() => shared.Price)
  price?: shared.Price;

  @SpeakeasyMetadata({ elemType: GetCustomerCostsById200ApplicationJSONDataPerPriceCostsPriceGroups })
  @Expose({ name: "price_groups" })
  @Type(() => GetCustomerCostsById200ApplicationJSONDataPerPriceCostsPriceGroups)
  priceGroups: GetCustomerCostsById200ApplicationJSONDataPerPriceCostsPriceGroups[];

  @SpeakeasyMetadata()
  @Expose({ name: "subtotal" })
  subtotal?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: string;
}

export class GetCustomerCostsById200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCustomerCostsById200ApplicationJSONDataPerPriceCosts })
  @Expose({ name: "per_price_costs" })
  @Type(() => GetCustomerCostsById200ApplicationJSONDataPerPriceCosts)
  perPriceCosts: GetCustomerCostsById200ApplicationJSONDataPerPriceCosts[];

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

export class GetCustomerCostsById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCustomerCostsById200ApplicationJSONData })
  @Expose({ name: "data" })
  @Type(() => GetCustomerCostsById200ApplicationJSONData)
  data: GetCustomerCostsById200ApplicationJSONData[];

  @SpeakeasyMetadata()
  @Expose({ name: "pagination_metadata" })
  paginationMetadata: Record<string, any>;
}

export class GetCustomerCostsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomerCostsById200ApplicationJSONObject?: GetCustomerCostsById200ApplicationJSON;
}