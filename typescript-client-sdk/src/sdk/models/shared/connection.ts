import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConnectionIntegrationIdEnum {
    Salesforce = "salesforce",
    Hubspot = "hubspot",
    Pipedrive = "pipedrive"
}

export enum ConnectionStatusEnum {
    NewConnection = "NEW_CONNECTION",
    InitialSync = "INITIAL_SYNC",
    Ready = "READY"
}


export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId?: ConnectionIntegrationIdEnum;

  @SpeakeasyMetadata({ data: "json, name=lastActivityDate" })
  lastActivityDate?: string;

  @SpeakeasyMetadata({ data: "json, name=nativeOrgURL" })
  nativeOrgURL?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConnectionStatusEnum;
}
