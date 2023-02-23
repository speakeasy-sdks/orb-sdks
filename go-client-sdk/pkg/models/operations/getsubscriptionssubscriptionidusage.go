package operations

import (
	"time"
)

type GetSubscriptionsSubscriptionIDUsagePathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
}

type GetSubscriptionsSubscriptionIDUsageGranularityEnum string

const (
	GetSubscriptionsSubscriptionIDUsageGranularityEnumDay GetSubscriptionsSubscriptionIDUsageGranularityEnum = "day"
)

type GetSubscriptionsSubscriptionIDUsageViewModeEnum string

const (
	GetSubscriptionsSubscriptionIDUsageViewModeEnumPeriodic   GetSubscriptionsSubscriptionIDUsageViewModeEnum = "periodic"
	GetSubscriptionsSubscriptionIDUsageViewModeEnumCumulative GetSubscriptionsSubscriptionIDUsageViewModeEnum = "cumulative"
)

type GetSubscriptionsSubscriptionIDUsageQueryParams struct {
	BillableMetricID *string                                             `queryParam:"style=form,explode=true,name=billable_metric_id"`
	Granularity      *GetSubscriptionsSubscriptionIDUsageGranularityEnum `queryParam:"style=form,explode=true,name=granularity"`
	GroupBy          *string                                             `queryParam:"style=form,explode=true,name=group_by"`
	TimeframeEnd     *time.Time                                          `queryParam:"style=form,explode=true,name=timeframe_end"`
	TimeframeStart   *time.Time                                          `queryParam:"style=form,explode=true,name=timeframe_start"`
	ViewMode         *GetSubscriptionsSubscriptionIDUsageViewModeEnum    `queryParam:"style=form,explode=true,name=view_mode"`
}

type GetSubscriptionsSubscriptionIDUsageRequest struct {
	PathParams  GetSubscriptionsSubscriptionIDUsagePathParams
	QueryParams GetSubscriptionsSubscriptionIDUsageQueryParams
}

type GetSubscriptionsSubscriptionIDUsageResponse struct {
	ContentType string
	StatusCode  int
}
