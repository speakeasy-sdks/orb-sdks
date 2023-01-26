import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Attendees {
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
   * batch - Get Batch Event Attendees
   *
   * Retrieve Event Attendees by a set of Id's
  **/
  batch(
    req: operations.GetBatchCrmEventAttendeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBatchCrmEventAttendeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBatchCrmEventAttendeeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crm/event/attendee/batch";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBatchCrmEventAttendeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseBody = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * create - Create Event Attendee
   *
   * Add an Attendee to an Event
  **/
  create(
    config?: AxiosRequestConfig
  ): Promise<operations.PostCrmEventAttendeeResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crm/event/attendee";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCrmEventAttendeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseBody = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * details - Get Event Attendee Details
   *
   * Get details about all event attendees. 
   * Details include the type, possible values, and other meta data about the fields.
  **/
  details(
    req: operations.GetDetailsCrmEventAttendeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDetailsCrmEventAttendeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDetailsCrmEventAttendeeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crm/event/attendee/details";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDetailsCrmEventAttendeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseBody = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * find - Get Event Attendee
   *
   * Retrieve a single Event Attendee by Id
  **/
  find(
    req: operations.GetOneCrmEventAttendeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOneCrmEventAttendeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOneCrmEventAttendeeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crm/event/attendee";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOneCrmEventAttendeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseBody = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * list - Get All Event Attendees
   *
   * Retrieve all Attendees for all Events
  **/
  list(
    req: operations.GetAllCrmEventAttendeesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllCrmEventAttendeesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllCrmEventAttendeesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crm/event/attendees";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllCrmEventAttendeesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseBody = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * search - Search Event Attendees
   *
   * Search all Event Attendees using filters
  **/
  search(
    req: operations.SearchCrmEventAttendeesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCrmEventAttendeesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCrmEventAttendeesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crm/event/attendees/search";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchCrmEventAttendeesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseBody = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * update - Update Event Attendee
   *
   * Update the status of an event attendee
  **/
  update(
    config?: AxiosRequestConfig
  ): Promise<operations.PutCrmEventAttendeeResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crm/event/attendee";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "patch",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutCrmEventAttendeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.responseBody = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
