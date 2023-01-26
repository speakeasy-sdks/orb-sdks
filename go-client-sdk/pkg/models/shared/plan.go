package shared

import (
	"time"
)

// PlanBasePlan
// The parent plan if the given plan was created by overriding one or more of the parent's prices
type PlanBasePlan struct {
	ExternalPlanID *string `json:"external_plan_id,omitempty"`
	ID             *string `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
}

type PlanProduct struct {
	CreatedAt time.Time `json:"created_at"`
	ID        string    `json:"id"`
	Name      string    `json:"name"`
}

type PlanTrialConfigTrialPeriodUnitEnum string

const (
	PlanTrialConfigTrialPeriodUnitEnumDays PlanTrialConfigTrialPeriodUnitEnum = "days"
)

type PlanTrialConfig struct {
	TrialPeriod     *float64                           `json:"trial_period,omitempty"`
	TrialPeriodUnit PlanTrialConfigTrialPeriodUnitEnum `json:"trial_period_unit"`
}

type Plan struct {
	BasePlan           *PlanBasePlan          `json:"base_plan,omitempty"`
	BasePlanID         *string                `json:"base_plan_id,omitempty"`
	CreatedAt          time.Time              `json:"created_at"`
	Currency           string                 `json:"currency"`
	DefaultInvoiceMemo *string                `json:"default_invoice_memo,omitempty"`
	Description        string                 `json:"description"`
	Discount           map[string]interface{} `json:"discount"`
	ExternalPlanID     *string                `json:"external_plan_id,omitempty"`
	ID                 string                 `json:"id"`
	InvoicingCurrency  string                 `json:"invoicing_currency"`
	Minimum            map[string]interface{} `json:"minimum"`
	Name               string                 `json:"name"`
	NetTerms           *int64                 `json:"net_terms,omitempty"`
	PlanPhases         []PlanPhase            `json:"plan_phases,omitempty"`
	Prices             []Price                `json:"prices"`
	Product            PlanProduct            `json:"product"`
	TrialConfig        *PlanTrialConfig       `json:"trial_config,omitempty"`
}
