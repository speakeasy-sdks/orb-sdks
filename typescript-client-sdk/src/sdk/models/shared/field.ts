import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FieldOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum FieldTypeEnum {
    String = "string",
    Number = "number",
    Datetime = "datetime",
    Date = "date",
    Boolean = "boolean",
    Reference = "reference",
    Phone = "phone",
    Url = "url",
    Id = "id",
    Email = "email",
    Percent = "percent",
    Singleselect = "singleselect",
    Multiselect = "multiselect",
    Address = "address",
    Decimal = "decimal",
    Time = "time",
    Daterange = "daterange",
    Object = "object"
}


// Field
/** 
 * (Alias: property) A field is a key-value pair on a CRM Object that provides information about that object.
**/
export class Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatable" })
  creatable: boolean;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom: boolean;

  @SpeakeasyMetadata({ data: "json, name=isArray" })
  isArray?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: FieldOptions })
  options?: FieldOptions[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: FieldTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=universal" })
  universal: boolean;

  @SpeakeasyMetadata({ data: "json, name=updatable" })
  updatable: boolean;
}
