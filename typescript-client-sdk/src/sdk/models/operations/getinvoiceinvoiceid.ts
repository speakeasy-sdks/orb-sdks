import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInvoiceInvoiceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;
}


export class GetInvoiceInvoiceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoiceInvoiceIdPathParams;
}


export class GetInvoiceInvoiceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoice?: shared.Invoice;

  @SpeakeasyMetadata()
  statusCode: number;
}
