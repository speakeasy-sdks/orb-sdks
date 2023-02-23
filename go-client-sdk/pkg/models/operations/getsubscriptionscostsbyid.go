package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetSubscriptionsCostsByIDPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type GetSubscriptionsCostsByIDQueryParams struct {
	GroupBy        *string    `queryParam:"style=form,explode=true,name=group_by"`
	TimeframeEnd   *time.Time `queryParam:"style=form,explode=true,name=timeframe_end"`
	TimeframeStart *time.Time `queryParam:"style=form,explode=true,name=timeframe_start"`
	ViewMode       *string    `queryParam:"style=form,explode=true,name=view_mode"`
}

type GetSubscriptionsCostsByIDRequest struct {
	PathParams  GetSubscriptionsCostsByIDPathParams
	QueryParams GetSubscriptionsCostsByIDQueryParams
}

type GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCostsPriceGroups struct {
	GroupingKey            string  `json:"grouping_key"`
	GroupingValue          string  `json:"grouping_value"`
	SecondaryGroupingKey   *string `json:"secondary_grouping_key,omitempty"`
	SecondaryGroupingValue *string `json:"secondary_grouping_value,omitempty"`
	Total                  string  `json:"total"`
}

// GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCosts
// Price's contributions for the timeframe, excluding any transforms (minimums and discounts).
type GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCosts struct {
	Price       *shared.Price                                                             `json:"price,omitempty"`
	PriceGroups []GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCostsPriceGroups `json:"price_groups"`
	Subtotal    *string                                                                   `json:"subtotal,omitempty"`
	Total       *string                                                                   `json:"total,omitempty"`
}

type GetSubscriptionsCostsByID200ApplicationJSONData struct {
	PerPriceCosts  []GetSubscriptionsCostsByID200ApplicationJSONDataPerPriceCosts `json:"per_price_costs"`
	Subtotal       string                                                         `json:"subtotal"`
	TimeframeEnd   time.Time                                                      `json:"timeframe_end"`
	TimeframeStart time.Time                                                      `json:"timeframe_start"`
	Total          string                                                         `json:"total"`
}

type GetSubscriptionsCostsByID200ApplicationJSON struct {
	Data               []GetSubscriptionsCostsByID200ApplicationJSONData `json:"data"`
	PaginationMetadata map[string]interface{}                            `json:"pagination_metadata"`
}

type GetSubscriptionsCostsByIDResponse struct {
	ContentType                                       string
	StatusCode                                        int
	GetSubscriptionsCostsByID200ApplicationJSONObject *GetSubscriptionsCostsByID200ApplicationJSON
}
