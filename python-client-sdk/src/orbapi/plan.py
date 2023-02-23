import requests
from . import utils
from orbapi.models import operations, shared
from typing import Optional

class Plan:
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

    
    def get_external_plans_plan_id(self, request: operations.GetExternalPlansPlanIDRequest) -> operations.GetExternalPlansPlanIDResponse:
        r"""Retrieve a plan by external plan ID
        This endpoint is used to fetch [plan](../reference/Orb-API.json/components/schemas/Plan) details given an external_plan_id identifier. It returns information about the prices included in the plan and their configuration, as well as the product that the plan is attached to.
        
        ## Serialized prices
        Orb supports a few different pricing models out of the box. Each of these models is serialized differently in a given [Price](../reference/Orb-API.json/components/schemas/Price) object. The `model_type` field determines the key for the configuration object that is present. A detailed explanation of price types can be found in the [Price schema](../reference/Orb-API.json/components/schemas/Price).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/plans/external_plan_id/{external_plan_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExternalPlansPlanIDResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def get_plans(self) -> operations.GetPlansResponse:
        r"""List plans
        This endpoint returns a list of all [plans](../reference/Orb-API.json/components/schemas/Plan) for an account in a list format. 
        
        The list of plans is ordered starting from the most recently created plan. The response also includes [`pagination_metadata`](../reference/Orb-API.json/components/schemas/Pagination-metadata), which lets the caller retrieve the next page of results if they exist. More information about pagination can be found in the [Pagination-metadata schema](../reference/Orb-API.json/components/schemas/Pagination-metadata).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/plans"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPlans200ApplicationJSON])
                res.get_plans_200_application_json_object = out

        return res

    
    def get_plans_plan_id(self, request: operations.GetPlansPlanIDRequest) -> operations.GetPlansPlanIDResponse:
        r"""Retrieve a plan
        This endpoint is used to fetch [plan](../reference/Orb-API.json/components/schemas/Plan) details given a plan identifier. It returns information about the prices included in the plan and their configuration, as well as the product that the plan is attached to.
        
        ## Serialized prices
        Orb supports a few different pricing models out of the box. Each of these models is serialized differently in a given [Price](../reference/Orb-API.json/components/schemas/Price) object. The `model_type` field determines the key for the configuration object that is present. A detailed explanation of price types can be found in the [Price schema](../reference/Orb-API.json/components/schemas/Price). 
        
        ## Phases
        Orb supports plan phases, also known as contract ramps. For plans with phases, the serialized prices refer to all prices across all phases.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/plans/{plan_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlansPlanIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Plan])
                res.plan = out

        return res

    