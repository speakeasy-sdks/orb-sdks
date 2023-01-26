package operations

import (
	"time"
)

type GetSubscriptionsSubscriptionIDSchedulePathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type GetSubscriptionsSubscriptionIDSchedule200ApplicationJSONDataPlan struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetSubscriptionsSubscriptionIDSchedule200ApplicationJSONData struct {
	EndDate   *time.Time                                                        `json:"end_date,omitempty"`
	Plan      *GetSubscriptionsSubscriptionIDSchedule200ApplicationJSONDataPlan `json:"plan,omitempty"`
	StartDate *time.Time                                                        `json:"start_date,omitempty"`
}

type GetSubscriptionsSubscriptionIDSchedule200ApplicationJSON struct {
	Data               []GetSubscriptionsSubscriptionIDSchedule200ApplicationJSONData `json:"data,omitempty"`
	PaginationMetadata map[string]interface{}                                         `json:"pagination_metadata,omitempty"`
}

type GetSubscriptionsSubscriptionIDScheduleRequest struct {
	PathParams GetSubscriptionsSubscriptionIDSchedulePathParams
}

type GetSubscriptionsSubscriptionIDScheduleResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	GetSubscriptionsSubscriptionIDSchedule200ApplicationJSONObject *GetSubscriptionsSubscriptionIDSchedule200ApplicationJSON
}
