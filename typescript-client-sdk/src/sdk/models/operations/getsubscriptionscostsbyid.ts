import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubscriptionsCostsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}


export class GetSubscriptionsCostsByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_by" })
  groupBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_end" })
  timeframeEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe_start" })
  timeframeStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view_mode" })
  viewMode?: string;
}


export class GetSubscriptionsCostsById200ApplicationJsonDataPerPriceCostsPriceGroups extends SpeakeasyBase {
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


// GetSubscriptionsCostsById200ApplicationJsonDataPerPriceCosts
/** 
 * Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
**/
export class GetSubscriptionsCostsById200ApplicationJsonDataPerPriceCosts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: shared.Price;

  @SpeakeasyMetadata({ data: "json, name=price_groups", elemType: GetSubscriptionsCostsById200ApplicationJsonDataPerPriceCostsPriceGroups })
  priceGroups: GetSubscriptionsCostsById200ApplicationJsonDataPerPriceCostsPriceGroups[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: string;
}


export class GetSubscriptionsCostsById200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=per_price_costs", elemType: GetSubscriptionsCostsById200ApplicationJsonDataPerPriceCosts })
  perPriceCosts: GetSubscriptionsCostsById200ApplicationJsonDataPerPriceCosts[];

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal: string;

  @SpeakeasyMetadata({ data: "json, name=timeframe_end" })
  timeframeEnd: Date;

  @SpeakeasyMetadata({ data: "json, name=timeframe_start" })
  timeframeStart: Date;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: string;
}


export class GetSubscriptionsCostsById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetSubscriptionsCostsById200ApplicationJsonData })
  data: GetSubscriptionsCostsById200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=pagination_metadata" })
  paginationMetadata: Record<string, any>;
}


export class GetSubscriptionsCostsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsCostsByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubscriptionsCostsByIdQueryParams;
}


export class GetSubscriptionsCostsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSubscriptionsCostsById200ApplicationJSONObject?: GetSubscriptionsCostsById200ApplicationJson;
}
