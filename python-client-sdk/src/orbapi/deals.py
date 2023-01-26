import requests
from typing import Optional
from orbapi.models import operations
from . import utils

class Deals:
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

    
    def batch(self, request: operations.GetBatchCrmDealRequest) -> operations.GetBatchCrmDealResponse:
        r"""Get Batch Deals
        Retrieve Deals by a set of Id's
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/deal/batch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchCrmDealResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBatchCrmDealResponseBody])
                res.response_body = out

        return res

    
    def create(self, request: operations.PostCrmDealRequest) -> operations.PostCrmDealResponse:
        r"""Create Deal
        Create a new Deal
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/deal"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCrmDealResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCrmDealResponseBody])
                res.response_body = out

        return res

    
    def details(self, request: operations.GetDetailsCrmDealRequest) -> operations.GetDetailsCrmDealResponse:
        r"""Get Deal Details
        Get details about all deals or a particular deal. 
        Details include the type, possible values, and other meta data about the fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/deal/details"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetailsCrmDealResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDetailsCrmDealResponseBody])
                res.response_body = out

        return res

    
    def find(self, request: operations.GetOneCrmDealRequest) -> operations.GetOneCrmDealResponse:
        r"""Get Deal
        Retrieve a single Deal by Id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/deal"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOneCrmDealResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOneCrmDealResponseBody])
                res.response_body = out

        return res

    
    def list(self, request: operations.GetAllCrmDealsRequest) -> operations.GetAllCrmDealsResponse:
        r"""Get All Deals
        Retrieve all Deals
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/deals"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCrmDealsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllCrmDealsResponseBody])
                res.response_body = out

        return res

    
    def search(self, request: operations.SearchCrmDealsRequest) -> operations.SearchCrmDealsResponse:
        r"""Search Deals
        Search all Deals using filters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/deals/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCrmDealsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCrmDealsResponseBody])
                res.response_body = out

        return res

    
    def update(self, request: operations.PutCrmDealRequest) -> operations.PutCrmDealResponse:
        r"""Update Deal
        Update an existing Deal
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/deal"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCrmDealResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCrmDealResponseBody])
                res.response_body = out

        return res

    