package operations

import (
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetPlansPlanIDPathParams struct {
	PlanID string `pathParam:"style=simple,explode=false,name=plan_id"`
}

type GetPlansPlanIDRequest struct {
	PathParams GetPlansPlanIDPathParams
}

type GetPlansPlanIDResponse struct {
	ContentType string
	Plan        *shared.Plan
	StatusCode  int
}
