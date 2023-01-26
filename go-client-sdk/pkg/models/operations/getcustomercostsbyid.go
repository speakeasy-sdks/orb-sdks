package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCustomerCostsByIDPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type GetCustomerCostsByIDViewModeEnum string

const (
	GetCustomerCostsByIDViewModeEnumPeriodic   GetCustomerCostsByIDViewModeEnum = "periodic"
	GetCustomerCostsByIDViewModeEnumCumulative GetCustomerCostsByIDViewModeEnum = "cumulative"
)

type GetCustomerCostsByIDQueryParams struct {
	GroupBy        *string                           `queryParam:"style=form,explode=true,name=group_by"`
	TimeframeEnd   *string                           `queryParam:"style=form,explode=true,name=timeframe_end"`
	TimeframeStart *time.Time                        `queryParam:"style=form,explode=true,name=timeframe_start"`
	ViewMode       *GetCustomerCostsByIDViewModeEnum `queryParam:"style=form,explode=true,name=view_mode"`
}

type GetCustomerCostsByID200ApplicationJSONDataPerPriceCostsPriceGroups struct {
	GroupingKey            string  `json:"grouping_key"`
	GroupingValue          string  `json:"grouping_value"`
	SecondaryGroupingKey   *string `json:"secondary_grouping_key,omitempty"`
	SecondaryGroupingValue *string `json:"secondary_grouping_value,omitempty"`
	Total                  string  `json:"total"`
}

// GetCustomerCostsByID200ApplicationJSONDataPerPriceCosts
// Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
type GetCustomerCostsByID200ApplicationJSONDataPerPriceCosts struct {
	Price       *shared.Price                                                        `json:"price,omitempty"`
	PriceGroups []GetCustomerCostsByID200ApplicationJSONDataPerPriceCostsPriceGroups `json:"price_groups"`
	Subtotal    *string                                                              `json:"subtotal,omitempty"`
	Total       *string                                                              `json:"total,omitempty"`
}

type GetCustomerCostsByID200ApplicationJSONData struct {
	PerPriceCosts  []GetCustomerCostsByID200ApplicationJSONDataPerPriceCosts `json:"per_price_costs"`
	Subtotal       string                                                    `json:"subtotal"`
	TimeframeEnd   time.Time                                                 `json:"timeframe_end"`
	TimeframeStart time.Time                                                 `json:"timeframe_start"`
	Total          string                                                    `json:"total"`
}

type GetCustomerCostsByID200ApplicationJSON struct {
	Data               []GetCustomerCostsByID200ApplicationJSONData `json:"data"`
	PaginationMetadata map[string]interface{}                       `json:"pagination_metadata"`
}

type GetCustomerCostsByIDRequest struct {
	PathParams  GetCustomerCostsByIDPathParams
	QueryParams GetCustomerCostsByIDQueryParams
}

type GetCustomerCostsByIDResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetCustomerCostsByID200ApplicationJSONObject *GetCustomerCostsByID200ApplicationJSON
}
