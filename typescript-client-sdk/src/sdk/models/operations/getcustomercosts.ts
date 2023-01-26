import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export class GetCustomerCosts200ApplicationJsonDataPerPriceCostsPriceGroups extends SpeakeasyBase {
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


// GetCustomerCosts200ApplicationJsonDataPerPriceCosts
/** 
 * Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
**/
export class GetCustomerCosts200ApplicationJsonDataPerPriceCosts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: shared.Price;

  @SpeakeasyMetadata({ data: "json, name=price_groups", elemType: GetCustomerCosts200ApplicationJsonDataPerPriceCostsPriceGroups })
  priceGroups: GetCustomerCosts200ApplicationJsonDataPerPriceCostsPriceGroups[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: string;
}


export class GetCustomerCosts200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=per_price_costs", elemType: GetCustomerCosts200ApplicationJsonDataPerPriceCosts })
  perPriceCosts: GetCustomerCosts200ApplicationJsonDataPerPriceCosts[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal: string;

  @SpeakeasyMetadata({ data: "json, name=timeframe_end" })
  timeframeEnd: Date;

  @SpeakeasyMetadata({ data: "json, name=timeframe_start" })
  timeframeStart: Date;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: string;
}


export class GetCustomerCosts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetCustomerCosts200ApplicationJsonData })
  data: GetCustomerCosts200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
  paginationMetadata: Record<string, any>;
}


export class GetCustomerCostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomerCostsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomerCostsQueryParams;
}


export class GetCustomerCostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomerCosts200ApplicationJSONObject?: GetCustomerCosts200ApplicationJson;
}
