import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCustomersCustomerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}

export class GetCustomersCustomerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersCustomerIdPathParams;
}

export class GetCustomersCustomerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  statusCode: number;
}