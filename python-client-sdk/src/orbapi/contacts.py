import requests
from typing import Optional
from orbapi.models import operations
from . import utils

class Contacts:
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

    
    def batch(self, request: operations.GetBatchCrmContactRequest) -> operations.GetBatchCrmContactResponse:
        r"""Get Batch Contacts
        Retrieve Contacts by a set of Id's
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/contact/batch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchCrmContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBatchCrmContactResponseBody])
                res.response_body = out

        return res

    
    def create(self, request: operations.PostCrmContactRequest) -> operations.PostCrmContactResponse:
        r"""Create Contact
        Create a new contact.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/contact"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCrmContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCrmContactResponseBody])
                res.response_body = out

        return res

    
    def details(self, request: operations.GetDetailsCrmContactRequest) -> operations.GetDetailsCrmContactResponse:
        r"""Get Contact Details
        Get details about all contacts. 
        Details include the type, possible values, and other meta data about the fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/contact/details"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetailsCrmContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDetailsCrmContactResponseBody])
                res.response_body = out

        return res

    
    def find(self, request: operations.GetOneCrmContactRequest) -> operations.GetOneCrmContactResponse:
        r"""Get Contact
        Retrieve a Contact by either Id or email. When both email and Id are included, Id will take priority.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/contact"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOneCrmContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOneCrmContactResponseBody])
                res.response_body = out

        return res

    
    def list(self, request: operations.GetAllCrmContactsRequest) -> operations.GetAllCrmContactsResponse:
        r"""Get All Contacts
        Retrieve all Contacts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/contacts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCrmContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllCrmContactsResponseBody])
                res.response_body = out

        return res

    
    def search(self, request: operations.SearchCrmContactsRequest) -> operations.SearchCrmContactsResponse:
        r"""Search Contacts
        Search all Contacts using filters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/contacts/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCrmContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCrmContactsResponseBody])
                res.response_body = out

        return res

    
    def update(self, request: operations.PutCrmContactRequest) -> operations.PutCrmContactResponse:
        r"""Update Contact
        Update an existing Contact.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/contact"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCrmContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCrmContactResponseBody])
                res.response_body = out

        return res

    