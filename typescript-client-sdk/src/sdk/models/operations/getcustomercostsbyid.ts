import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start" })
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
  @SpeakeasyMetadata({ data: "json, name=grouping_key" })
  groupingKey: string;

  @SpeakeasyMetadata({ data: "json, name=grouping_value" })
  groupingValue: string;

  @SpeakeasyMetadata({ data: "json, name=secondary_grouping_key" })
  secondaryGroupingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary_grouping_value" })
  secondaryGroupingValue?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: string;
}

// GetCustomerCostsById200ApplicationJSONDataPerPriceCosts
/** 
 * Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
**/
export class GetCustomerCostsById200ApplicationJSONDataPerPriceCosts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: shared.Price;

  @SpeakeasyMetadata({ data: "json, name=price_groups", elemType: GetCustomerCostsById200ApplicationJSONDataPerPriceCostsPriceGroups })
  priceGroups: GetCustomerCostsById200ApplicationJSONDataPerPriceCostsPriceGroups[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: string;
}

export class GetCustomerCostsById200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=per_price_costs", elemType: GetCustomerCostsById200ApplicationJSONDataPerPriceCosts })
  perPriceCosts: GetCustomerCostsById200ApplicationJSONDataPerPriceCosts[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal: string;

  @SpeakeasyMetadata({ data: "json, name=timeframe_end" })
  timeframeEnd: Date;

  @SpeakeasyMetadata({ data: "json, name=timeframe_start" })
  timeframeStart: Date;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: string;
}

export class GetCustomerCostsById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetCustomerCostsById200ApplicationJSONData })
  data: GetCustomerCostsById200ApplicationJSONData[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
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