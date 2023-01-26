package shared

type PlanPhaseDurationUnitEnum string

const (
	PlanPhaseDurationUnitEnumMonthly   PlanPhaseDurationUnitEnum = "monthly"
	PlanPhaseDurationUnitEnumQuarterly PlanPhaseDurationUnitEnum = "quarterly"
	PlanPhaseDurationUnitEnumAnnual    PlanPhaseDurationUnitEnum = "annual"
)

// PlanPhase
// A plan can optionally consist of plan phases, which represents a pricing configuration that's only active for the length of time specified by `duration` and `duration_unit`. All plans must have an evergreen phase, which is the last phase and active indefinitely.
type PlanPhase struct {
	Description  *string                   `json:"description,omitempty"`
	Discount     map[string]interface{}    `json:"discount"`
	Duration     *int64                    `json:"duration,omitempty"`
	DurationUnit PlanPhaseDurationUnitEnum `json:"duration_unit"`
	Minimum      map[string]interface{}    `json:"minimum"`
	Name         *string                   `json:"name,omitempty"`
	Order        *int64                    `json:"order,omitempty"`
}
