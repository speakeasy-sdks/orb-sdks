import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum PlanPhaseDurationUnitEnum {
    Monthly = "monthly",
    Quarterly = "quarterly",
    Annual = "annual"
}

// PlanPhase
/** 
 * A plan can optionally consist of plan phases, which represents a pricing configuration that's only active for the length of time specified by `duration` and `duration_unit`. All plans must have an evergreen phase, which is the last phase and active indefinitely.
**/
export class PlanPhase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "duration_unit" })
  durationUnit: PlanPhaseDurationUnitEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum" })
  minimum: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;
}