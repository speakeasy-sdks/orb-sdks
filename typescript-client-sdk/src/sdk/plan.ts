import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Plan {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getExternalPlansPlanId - Retrieve a plan by external plan ID
   *
   * This endpoint is used to fetch [plan](../reference/Orb-API.json/components/schemas/Plan) details given an external_plan_id identifier. It returns information about the prices included in the plan and their configuration, as well as the product that the plan is attached to.
   * 
   * ## Serialized prices
   * Orb supports a few different pricing models out of the box. Each of these models is serialized differently in a given [Price](../reference/Orb-API.json/components/schemas/Price) object. The `model_type` field determines the key for the configuration object that is present. A detailed explanation of price types can be found in the [Price schema](../reference/Orb-API.json/components/schemas/Price).
  **/
  getExternalPlansPlanId(
    req: operations.GetExternalPlansPlanIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExternalPlansPlanIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExternalPlansPlanIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/plans/external_plan_id/{external_plan_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetExternalPlansPlanIdResponse = {statusCode: httpRes.status, contentType: contentType};
        }

        return res;
      })
  }

  
  /**
   * getPlans - List plans
   *
   * This endpoint returns a list of all [plans](../reference/Orb-API.json/components/schemas/Plan) for an account in a list format. 
   * 
   * The list of plans is ordered starting from the most recently created plan. The response also includes [`pagination_metadata`](../reference/Orb-API.json/components/schemas/Pagination-metadata), which lets the caller retrieve the next page of results if they exist. More information about pagination can be found in the [Pagination-metadata schema](../reference/Orb-API.json/components/schemas/Pagination-metadata).
   * 
  **/
  getPlans(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlansResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/plans";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPlansResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getPlans200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPlansPlanId - Retrieve a plan
   *
   * This endpoint is used to fetch [plan](../reference/Orb-API.json/components/schemas/Plan) details given a plan identifier. It returns information about the prices included in the plan and their configuration, as well as the product that the plan is attached to.
   * 
   * ## Serialized prices
   * Orb supports a few different pricing models out of the box. Each of these models is serialized differently in a given [Price](../reference/Orb-API.json/components/schemas/Price) object. The `model_type` field determines the key for the configuration object that is present. A detailed explanation of price types can be found in the [Price schema](../reference/Orb-API.json/components/schemas/Price). 
   * 
   * ## Phases
   * Orb supports plan phases, also known as contract ramps. For plans with phases, the serialized prices refer to all prices across all phases.
  **/
  getPlansPlanId(
    req: operations.GetPlansPlanIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlansPlanIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlansPlanIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/plans/{plan_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPlansPlanIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.plan = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
