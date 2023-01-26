import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebhookMetadataCreate
/** 
 * Information describing a webhook
**/
export class WebhookMetadataCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;
}
