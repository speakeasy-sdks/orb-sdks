import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



export class AccountAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactIds" })
  contactIds: string[];

  @SpeakeasyMetadata({ data: "json, name=dealIds" })
  dealIds: string[];

  @SpeakeasyMetadata({ data: "json, name=eventIds" })
  eventIds: string[];

  @SpeakeasyMetadata({ data: "json, name=leadIds" })
  leadIds: string[];

  @SpeakeasyMetadata({ data: "json, name=noteIds" })
  noteIds: string[];

  @SpeakeasyMetadata({ data: "json, name=ownerUserId" })
  ownerUserId: string;

  @SpeakeasyMetadata({ data: "json, name=taskIds" })
  taskIds: string[];
}


// Account
/** 
 * (Alias: company, organization) An organization involved with your business.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=annualRevenue" })
  annualRevenue?: number;

  @SpeakeasyMetadata({ data: "json, name=associations" })
  associations: AccountAssociations;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nativeId" })
  nativeId: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfEmployees" })
  numberOfEmployees?: number;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
