import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IntegrationIntegrationIdEnum {
    Salesforce = "salesforce",
    Hubspot = "hubspot",
    Pipedrive = "pipedrive"
}


export class Integration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iconURL" })
  iconURL?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId?: IntegrationIntegrationIdEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
