import requests
from typing import Optional
from orbapi.models import operations
from . import utils

class Attendees:
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

    
    def batch(self, request: operations.GetBatchCrmEventAttendeeRequest) -> operations.GetBatchCrmEventAttendeeResponse:
        r"""Get Batch Event Attendees
        Retrieve Event Attendees by a set of Id's
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/event/attendee/batch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchCrmEventAttendeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBatchCrmEventAttendeeResponseBody])
                res.response_body = out

        return res

    
    def create(self) -> operations.PostCrmEventAttendeeResponse:
        r"""Create Event Attendee
        Add an Attendee to an Event
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/event/attendee"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCrmEventAttendeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCrmEventAttendeeResponseBody])
                res.response_body = out

        return res

    
    def details(self, request: operations.GetDetailsCrmEventAttendeeRequest) -> operations.GetDetailsCrmEventAttendeeResponse:
        r"""Get Event Attendee Details
        Get details about all event attendees. 
        Details include the type, possible values, and other meta data about the fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/event/attendee/details"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetailsCrmEventAttendeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDetailsCrmEventAttendeeResponseBody])
                res.response_body = out

        return res

    
    def find(self, request: operations.GetOneCrmEventAttendeeRequest) -> operations.GetOneCrmEventAttendeeResponse:
        r"""Get Event Attendee
        Retrieve a single Event Attendee by Id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/event/attendee"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOneCrmEventAttendeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOneCrmEventAttendeeResponseBody])
                res.response_body = out

        return res

    
    def list(self, request: operations.GetAllCrmEventAttendeesRequest) -> operations.GetAllCrmEventAttendeesResponse:
        r"""Get All Event Attendees
        Retrieve all Attendees for all Events
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/event/attendees"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCrmEventAttendeesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllCrmEventAttendeesResponseBody])
                res.response_body = out

        return res

    
    def search(self, request: operations.SearchCrmEventAttendeesRequest) -> operations.SearchCrmEventAttendeesResponse:
        r"""Search Event Attendees
        Search all Event Attendees using filters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/event/attendees/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCrmEventAttendeesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCrmEventAttendeesResponseBody])
                res.response_body = out

        return res

    
    def update(self) -> operations.PutCrmEventAttendeeResponse:
        r"""Update Event Attendee
        Update the status of an event attendee
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/event/attendee"
        
        
        client = self._security_client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCrmEventAttendeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCrmEventAttendeeResponseBody])
                res.response_body = out

        return res

    