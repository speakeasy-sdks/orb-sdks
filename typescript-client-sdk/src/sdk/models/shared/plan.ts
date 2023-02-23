import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PlanPhase } from "./planphase";
import { Price } from "./price";


// PlanBasePlan
/** 
 * The parent plan if the given plan was created by overriding one or more of the parent's prices
**/
export class PlanBasePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external_plan_id" })
  externalPlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PlanProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
export enum PlanTrialConfigTrialPeriodUnitEnum {
    Days = "days"
}

export class PlanTrialConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trial_period" })
  trialPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=trial_period_unit" })
  trialPeriodUnit: PlanTrialConfigTrialPeriodUnitEnum;
}

export class Plan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_plan" })
  basePlan?: PlanBasePlan;

  @SpeakeasyMetadata({ data: "json, name=base_plan_id" })
  basePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=default_invoice_memo" })
  defaultInvoiceMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=external_plan_id" })
  externalPlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=invoicing_currency" })
  invoicingCurrency: string;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=net_terms" })
  netTerms?: number;

  @SpeakeasyMetadata({ data: "json, name=plan_phases", elemType: PlanPhase })
  planPhases?: PlanPhase[];

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: Price })
  prices: Price[];

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: PlanProduct;

  @SpeakeasyMetadata({ data: "json, name=trial_config" })
  trialConfig?: PlanTrialConfig;
}