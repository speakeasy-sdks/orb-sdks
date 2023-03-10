import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostInvoicesInvoiceIdVoidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;
}


export class PostInvoicesInvoiceIdVoidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostInvoicesInvoiceIdVoidPathParams;
}


export class PostInvoicesInvoiceIdVoidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoice?: shared.Invoice;

  @SpeakeasyMetadata()
  statusCode: number;
}
