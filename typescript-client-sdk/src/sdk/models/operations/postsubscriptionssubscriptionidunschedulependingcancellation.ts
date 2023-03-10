import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSubscriptionsSubscriptionIdUnschedulePendingCancellationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}


export class PostSubscriptionsSubscriptionIdUnschedulePendingCancellationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSubscriptionsSubscriptionIdUnschedulePendingCancellationPathParams;
}


export class PostSubscriptionsSubscriptionIdUnschedulePendingCancellationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscription?: shared.Subscription;
}
