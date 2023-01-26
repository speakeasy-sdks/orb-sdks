import requests
from typing import Optional
from orbapi.models import operations
from . import utils

class Integrations:
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

    
    def list(self) -> operations.GetAllCrmIntegrationsResponse:
        r"""Get CRM Integrations
        Return all of the CRM integrations supported by Vessel.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/connection/crm/integrations"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCrmIntegrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllCrmIntegrationsResponseBody])
                res.response_body = out

        return res

    