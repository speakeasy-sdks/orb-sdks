package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCustomerCostsPathParams struct {
	ExternalCustomerID string `pathParam:"style=simple,explode=false,name=external_customer_id"`
}

type GetCustomerCostsViewModeEnum string

const (
	GetCustomerCostsViewModeEnumPeriodic   GetCustomerCostsViewModeEnum = "periodic"
	GetCustomerCostsViewModeEnumCumulative GetCustomerCostsViewModeEnum = "cumulative"
)

type GetCustomerCostsQueryParams struct {
	GroupBy        *string                       `queryParam:"style=form,explode=true,name=group_by"`
	TimeframeEnd   *string                       `queryParam:"style=form,explode=true,name=timeframe_end"`
	TimeframeStart *time.Time                    `queryParam:"style=form,explode=true,name=timeframe_start"`
	ViewMode       *GetCustomerCostsViewModeEnum `queryParam:"style=form,explode=true,name=view_mode"`
}

type GetCustomerCosts200ApplicationJSONDataPerPriceCostsPriceGroups struct {
	GroupingKey            string  `json:"grouping_key"`
	GroupingValue          string  `json:"grouping_value"`
	SecondaryGroupingKey   *string `json:"secondary_grouping_key,omitempty"`
	SecondaryGroupingValue *string `json:"secondary_grouping_value,omitempty"`
	Total                  string  `json:"total"`
}

// GetCustomerCosts200ApplicationJSONDataPerPriceCosts
// Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
type GetCustomerCosts200ApplicationJSONDataPerPriceCosts struct {
	Price       *shared.Price                                                    `json:"price,omitempty"`
	PriceGroups []GetCustomerCosts200ApplicationJSONDataPerPriceCostsPriceGroups `json:"price_groups"`
	Subtotal    *string                                                          `json:"subtotal,omitempty"`
	Total       *string                                                          `json:"total,omitempty"`
}

type GetCustomerCosts200ApplicationJSONData struct {
	PerPriceCosts  []GetCustomerCosts200ApplicationJSONDataPerPriceCosts `json:"per_price_costs"`
	Subtotal       string                                                `json:"subtotal"`
	TimeframeEnd   time.Time                                             `json:"timeframe_end"`
	TimeframeStart time.Time                                             `json:"timeframe_start"`
	Total          string                                                `json:"total"`
}

type GetCustomerCosts200ApplicationJSON struct {
	Data               []GetCustomerCosts200ApplicationJSONData `json:"data"`
	PaginationMetadata map[string]interface{}                   `json:"pagination_metadata"`
}

type GetCustomerCostsRequest struct {
	PathParams  GetCustomerCostsPathParams
	QueryParams GetCustomerCostsQueryParams
}

type GetCustomerCostsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetCustomerCosts200ApplicationJSONObject *GetCustomerCosts200ApplicationJSON
}
