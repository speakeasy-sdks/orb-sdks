import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=duration_unit" })
  durationUnit: PlanPhaseDurationUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;
}
