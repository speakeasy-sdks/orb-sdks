import requests
from typing import Optional
from orbapi.models import operations
from . import utils

class Tasks:
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

    
    def batch(self, request: operations.GetBatchCrmTaskRequest) -> operations.GetBatchCrmTaskResponse:
        r"""Get Batch Tasks
        Retrieve Tasks by a set of Id's
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/task/batch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchCrmTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBatchCrmTaskResponseBody])
                res.response_body = out

        return res

    
    def create(self, request: operations.PostCrmTaskRequest) -> operations.PostCrmTaskResponse:
        r"""Create Task
        Create a new Task.
        *CRM Caveats*:
        - Salesforce: You may only associate a Task with either a Lead or a Contact *and* either a Deal or an Account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/task"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCrmTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCrmTaskResponseBody])
                res.response_body = out

        return res

    
    def details(self, request: operations.GetDetailsCrmTaskRequest) -> operations.GetDetailsCrmTaskResponse:
        r"""Get Task Details
        Get details about all tasks. 
        Details include the type, possible values, and other meta data about the fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/task/details"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetailsCrmTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDetailsCrmTaskResponseBody])
                res.response_body = out

        return res

    
    def find(self, request: operations.GetOneCrmTaskRequest) -> operations.GetOneCrmTaskResponse:
        r"""Get Task
        Retrieve a single Task by Id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/task"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOneCrmTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOneCrmTaskResponseBody])
                res.response_body = out

        return res

    
    def list(self, request: operations.GetAllCrmTasksRequest) -> operations.GetAllCrmTasksResponse:
        r"""Get All Tasks
        Retrieve all Tasks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/tasks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCrmTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllCrmTasksResponseBody])
                res.response_body = out

        return res

    
    def search(self, request: operations.SearchCrmTasksRequest) -> operations.SearchCrmTasksResponse:
        r"""Search Tasks
        Search all Tasks using filters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/tasks/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCrmTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCrmTasksResponseBody])
                res.response_body = out

        return res

    
    def update(self, request: operations.PutCrmTaskRequest) -> operations.PutCrmTaskResponse:
        r"""Update Task
        Update an existing Task by Id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/task"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCrmTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCrmTaskResponseBody])
                res.response_body = out

        return res

    