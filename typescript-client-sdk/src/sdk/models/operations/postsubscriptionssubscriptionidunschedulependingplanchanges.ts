import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostSubscriptionsSubscriptionIdUnschedulePendingPlanChangesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}

export class PostSubscriptionsSubscriptionIdUnschedulePendingPlanChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSubscriptionsSubscriptionIdUnschedulePendingPlanChangesPathParams;
}

export class PostSubscriptionsSubscriptionIdUnschedulePendingPlanChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscription?: shared.Subscription;
}