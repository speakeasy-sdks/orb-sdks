import requests
from . import utils
from orbapi.models import operations, shared
from typing import Optional

class Invoice:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_invoice_invoice_id(self, request: operations.GetInvoiceInvoiceIDRequest) -> operations.GetInvoiceInvoiceIDResponse:
        r"""Retrieve an Invoice
        This endpoint is used to fetch an [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice) given an identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/invoices/{invoice_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoiceInvoiceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Invoice])
                res.invoice = out

        return res

    
    def get_invoices(self, request: operations.GetInvoicesRequest) -> operations.GetInvoicesResponse:
        r"""List invoices
        This endpoint returns a list of all [`Invoice`](../reference/Orb-API.json/components/schemas/Invoice)s for an account in a list format. 
        
        The list of invoices is ordered starting from the most recently issued invoice date. The response also includes `pagination_metadata`, which lets the caller retrieve the next page of results if they exist.
        
        By default, this only returns invoices that are `issued`, `paid`, or `synced`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/invoices"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInvoices200ApplicationJSON])
                res.get_invoices_200_application_json_object = out

        return res

    
    def get_invoices_upcoming(self, request: operations.GetInvoicesUpcomingRequest) -> operations.GetInvoicesUpcomingResponse:
        r"""Retrieve upcoming invoice
        This endpoint can be used to fetch the [`Upcoming Invoice`](../reference/Orb-API.json/components/schemas/Upcoming%20Invoice) for the current billing period given a subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/invoices/upcoming"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoicesUpcomingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpcomingPercent20Invoice])
                res.upcoming_percent_20_invoice = out

        return res

    
    def post_invoices_invoice_id_void(self, request: operations.PostInvoicesInvoiceIDVoidRequest) -> operations.PostInvoicesInvoiceIDVoidResponse:
        r"""Void an invoice
        This endpoint allows an invoice's status to be set the `void` status. This can only be done to invoices that are in the `issued` status.
        
        If the associated invoice has used the customer balance to change the amount due, the customer balance operation will be reverted. For example, if the invoice used $10 of customer balance, that amount will be added back to the customer balance upon voiding.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/invoices/{invoice_id}/void", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInvoicesInvoiceIDVoidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Invoice])
                res.invoice = out
        elif r.status_code == 400:
            pass

        return res

    