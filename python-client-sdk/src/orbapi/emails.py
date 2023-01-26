import requests
from typing import Optional
from orbapi.models import operations
from . import utils

class Emails:
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

    
    def batch(self, request: operations.GetBatchCrmEmailRequest) -> operations.GetBatchCrmEmailResponse:
        r"""Get Batch Emails
        Retrieve Email by a set of Id's
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/email/batch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchCrmEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBatchCrmEmailResponseBody])
                res.response_body = out

        return res

    
    def create(self, request: operations.PostCrmEmailRequest) -> operations.PostCrmEmailResponse:
        r"""Create Email
        Create a new Email.
        *CRM Caveats*:
        
        - Pipedrive: Not supported.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/email"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCrmEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCrmEmailResponseBody])
                res.response_body = out

        return res

    
    def details(self, request: operations.GetDetailsCrmEmailRequest) -> operations.GetDetailsCrmEmailResponse:
        r"""Get Email Details
        Get details about all emails. 
        Details include the type, possible values, and other meta data about the fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/email/details"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetailsCrmEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDetailsCrmEmailResponseBody])
                res.response_body = out

        return res

    
    def find(self, request: operations.GetOneCrmEmailRequest) -> operations.GetOneCrmEmailResponse:
        r"""Get Email
        Retrieve a single Task by Id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/email"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOneCrmEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOneCrmEmailResponseBody])
                res.response_body = out

        return res

    
    def list(self, request: operations.GetAllCrmEmailsRequest) -> operations.GetAllCrmEmailsResponse:
        r"""Get All Emails
        Retrieve all Emails
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/emails"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCrmEmailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllCrmEmailsResponseBody])
                res.response_body = out

        return res

    
    def search(self, request: operations.SearchCrmEmailsRequest) -> operations.SearchCrmEmailsResponse:
        r"""Search Emails
        Search all Emails using filters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/emails/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCrmEmailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCrmEmailsResponseBody])
                res.response_body = out

        return res

    
    def update(self, request: operations.PutCrmEmailRequest) -> operations.PutCrmEmailResponse:
        r"""Update Email
        Update an Email by Id.
        *CRM Caveats*:
        - Pipedrive: Not supported.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/email"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCrmEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCrmEmailResponseBody])
                res.response_body = out

        return res

    