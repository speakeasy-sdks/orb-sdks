import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetExternalPlansPlanIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_plan_id" })
  externalPlanId: string;
}

export class GetExternalPlansPlanIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExternalPlansPlanIdPathParams;
}

export class GetExternalPlansPlanIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}