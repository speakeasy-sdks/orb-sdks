import requests
from typing import Optional
from orbapi.models import operations
from . import utils

class Notes:
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

    
    def batch(self, request: operations.GetBatchCrmNoteRequest) -> operations.GetBatchCrmNoteResponse:
        r"""Get Batch Notes
        Retrieve Notes by a set of Id's
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/note/batch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchCrmNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBatchCrmNoteResponseBody])
                res.response_body = out

        return res

    
    def create(self, request: operations.PostCrmNoteRequest) -> operations.PostCrmNoteResponse:
        r"""Create Note
        Create a new Note.
        *CRM Caveats*:
        - Salesforce: You may only associate a Note with one entity.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/note"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCrmNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCrmNoteResponseBody])
                res.response_body = out

        return res

    
    def details(self, request: operations.GetDetailsCrmNoteRequest) -> operations.GetDetailsCrmNoteResponse:
        r"""Get Note Details
        Get details about all notes. 
        Details include the type, possible values, and other meta data about the fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/note/details"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetailsCrmNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDetailsCrmNoteResponseBody])
                res.response_body = out

        return res

    
    def find(self, request: operations.GetOneCrmNoteRequest) -> operations.GetOneCrmNoteResponse:
        r"""Get Note
        Retrieve a single Note by Id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/note"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOneCrmNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOneCrmNoteResponseBody])
                res.response_body = out

        return res

    
    def list(self, request: operations.GetAllCrmNotesRequest) -> operations.GetAllCrmNotesResponse:
        r"""Get All Notes
        Retrieve all Notes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/notes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCrmNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllCrmNotesResponseBody])
                res.response_body = out

        return res

    
    def search(self, request: operations.SearchCrmNotesRequest) -> operations.SearchCrmNotesResponse:
        r"""Search Notes
        Search all Notes using filters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/notes/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCrmNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCrmNotesResponseBody])
                res.response_body = out

        return res

    
    def update(self, request: operations.PutCrmNoteRequest) -> operations.PutCrmNoteResponse:
        r"""Update Note
        Update an existing Note by Id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/note"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCrmNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCrmNoteResponseBody])
                res.response_body = out

        return res

    