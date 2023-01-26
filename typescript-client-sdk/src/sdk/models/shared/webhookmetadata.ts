import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebhookMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookId" })
  webhookId?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;
}
