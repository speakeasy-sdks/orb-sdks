package operations

type GetExternalPlansPlanIDPathParams struct {
	ExternalPlanID string `pathParam:"style=simple,explode=false,name=external_plan_id"`
}

type GetExternalPlansPlanIDRequest struct {
	PathParams GetExternalPlansPlanIDPathParams
}

type GetExternalPlansPlanIDResponse struct {
	ContentType string
	StatusCode  int
}
