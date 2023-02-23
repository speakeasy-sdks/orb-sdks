import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostSubscriptionsSubscriptionIdCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}
export enum PostSubscriptionsSubscriptionIdCancelRequestBodyCancelOptionEnum {
    Immediate = "immediate",
    EndOfSubscriptionTerm = "end_of_subscription_term",
    RequestedDate = "requested_date"
}

export class PostSubscriptionsSubscriptionIdCancelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancel_option" })
  cancelOption: PostSubscriptionsSubscriptionIdCancelRequestBodyCancelOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=cancellation_date" })
  cancellationDate?: Date;
}

export class PostSubscriptionsSubscriptionIdCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSubscriptionsSubscriptionIdCancelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSubscriptionsSubscriptionIdCancelRequestBody;
}

export class PostSubscriptionsSubscriptionIdCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscription?: shared.Subscription;
}