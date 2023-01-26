import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlansPlanIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=plan_id" })
  planId: string;
}


export class GetPlansPlanIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlansPlanIdPathParams;
}


export class GetPlansPlanIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  plan?: shared.Plan;

  @SpeakeasyMetadata()
  statusCode: number;
}
