import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomersExternalCustomerIdExternalCustomerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_customer_id" })
  externalCustomerId: string;
}


export class GetCustomersExternalCustomerIdExternalCustomerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersExternalCustomerIdExternalCustomerIdPathParams;
}


export class GetCustomersExternalCustomerIdExternalCustomerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  statusCode: number;
}
