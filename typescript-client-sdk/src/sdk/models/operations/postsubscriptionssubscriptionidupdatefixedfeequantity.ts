import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostSubscriptionsSubscriptionIdUpdateFixedFeeQuantityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}

export class PostSubscriptionsSubscriptionIdUpdateFixedFeeQuantityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effective_date" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=price_id" })
  priceId: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;
}

export class PostSubscriptionsSubscriptionIdUpdateFixedFeeQuantityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSubscriptionsSubscriptionIdUpdateFixedFeeQuantityPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSubscriptionsSubscriptionIdUpdateFixedFeeQuantityRequestBody;
}

export class PostSubscriptionsSubscriptionIdUpdateFixedFeeQuantityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscription?: shared.Subscription;
}