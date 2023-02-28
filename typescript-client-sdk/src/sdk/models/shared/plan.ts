import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PlanPhase } from "./planphase";
import { Price } from "./price";
import { Expose, Transform, Type } from "class-transformer";


// PlanBasePlan
/** 
 * The parent plan if the given plan was created by overriding one or more of the parent's prices
**/
export class PlanBasePlan extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "external_plan_id" })
  externalPlanId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PlanProduct extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}
export enum PlanTrialConfigTrialPeriodUnitEnum {
    Days = "days"
}

export class PlanTrialConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "trial_period" })
  trialPeriod?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "trial_period_unit" })
  trialPeriodUnit: PlanTrialConfigTrialPeriodUnitEnum;
}

export class Plan extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "base_plan" })
  @Type(() => PlanBasePlan)
  basePlan?: PlanBasePlan;

  @SpeakeasyMetadata()
  @Expose({ name: "base_plan_id" })
  basePlanId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "default_invoice_memo" })
  defaultInvoiceMemo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "external_plan_id" })
  externalPlanId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoicing_currency" })
  invoicingCurrency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum" })
  minimum: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "net_terms" })
  netTerms?: number;

  @SpeakeasyMetadata({ elemType: PlanPhase })
  @Expose({ name: "plan_phases" })
  @Type(() => PlanPhase)
  planPhases?: PlanPhase[];

  @SpeakeasyMetadata({ elemType: Price })
  @Expose({ name: "prices" })
  @Type(() => Price)
  prices: Price[];

  @SpeakeasyMetadata()
  @Expose({ name: "product" })
  @Type(() => PlanProduct)
  product: PlanProduct;

  @SpeakeasyMetadata()
  @Expose({ name: "trial_config" })
  @Type(() => PlanTrialConfig)
  trialConfig?: PlanTrialConfig;
}