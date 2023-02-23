import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start" })
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

// GetCustomerCosts200ApplicationJSONDataPerPriceCosts
/** 
 * Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
**/
export class GetCustomerCosts200ApplicationJSONDataPerPriceCosts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: shared.Price;

  @SpeakeasyMetadata({ data: "json, name=price_groups", elemType: GetCustomerCosts200ApplicationJSONDataPerPriceCostsPriceGroups })
  priceGroups: GetCustomerCosts200ApplicationJSONDataPerPriceCostsPriceGroups[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: string;
}

export class GetCustomerCosts200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=per_price_costs", elemType: GetCustomerCosts200ApplicationJSONDataPerPriceCosts })
  perPriceCosts: GetCustomerCosts200ApplicationJSONDataPerPriceCosts[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal: string;

  @SpeakeasyMetadata({ data: "json, name=timeframe_end" })
  timeframeEnd: Date;

  @SpeakeasyMetadata({ data: "json, name=timeframe_start" })
  timeframeStart: Date;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: string;
}

export class GetCustomerCosts200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetCustomerCosts200ApplicationJSONData })
  data: GetCustomerCosts200ApplicationJSONData[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
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