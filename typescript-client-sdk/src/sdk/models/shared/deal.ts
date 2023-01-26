import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DealAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds: string[];

  @SpeakeasyMetadata({ data: "json, name=contactIds" })
  contactIds: string[];

  @SpeakeasyMetadata({ data: "json, name=eventIds" })
  eventIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=noteIds" })
  noteIds: string[];

  @SpeakeasyMetadata({ data: "json, name=ownerUserId" })
  ownerUserId: string;

  @SpeakeasyMetadata({ data: "json, name=taskIds" })
  taskIds: string[];
}


// Deal
/** 
 * (Alias: Opportunity) An object representing either the opportunity to sell a product to an Account, or in the case of an `isWon` deal, a product sold to an Account.
 * *CRM Caveats*:
 * - Pipedrive: Users must have "Deal probability" turned on for the given pipeline for probability to be configurable and returned.
**/
export class Deal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=associations" })
  associations: DealAssociations;

  @SpeakeasyMetadata({ data: "json, name=closeDate" })
  closeDate: string;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=expectedRevenue" })
  expectedRevenue?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isClosed" })
  isClosed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isWon" })
  isWon?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId: string;

  @SpeakeasyMetadata({ data: "json, name=probability" })
  probability?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage: string;
}
