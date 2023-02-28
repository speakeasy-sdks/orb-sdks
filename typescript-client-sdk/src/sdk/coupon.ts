import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Coupon {
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
   * getCoupons - List coupons
   *
   * This endpoint returns a list of all [coupons](../reference/Orb-API.json/components/schemas/Coupon) for an account in a list format. 
   * 
   * The list of coupons is ordered starting from the most recently created coupon. The response also includes [`pagination_metadata`](../reference/Orb-API.json/components/schemas/Pagination-metadata), which lets the caller retrieve the next page of results if they exist. More information about pagination can be found in the [Pagination-metadata schema](../reference/Orb-API.json/components/schemas/Pagination-metadata).
  **/
  getCoupons(
    req: operations.GetCouponsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCouponsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCouponsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/coupons";
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCouponsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCoupons200ApplicationJSONObject = plainToInstance(
                operations.GetCoupons200ApplicationJSON,
                httpRes?.data as operations.GetCoupons200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCouponsCouponId - Retrieve a coupon
   *
   * This endpoint retrieves a coupon by its ID. To fetch coupons by their redemption code, use the [List coupons](../reference/Orb-API.json/paths/~1coupons/get) endpoint with the `redemption_code` parameter.
  **/
  getCouponsCouponId(
    req: operations.GetCouponsCouponIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCouponsCouponIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCouponsCouponIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/coupons/{coupon_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCouponsCouponIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.coupon = plainToInstance(
                shared.Coupon,
                httpRes?.data as shared.Coupon,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSubscriptionsByCouponId - List subscriptions for a coupon
   *
   * This endpoint returns a list of all subscriptions that have redeemed a given coupon as a [paginated](../docs/Pagination.md) list, ordered starting from the most recently created subscription. For a full discussion of the subscription resource, see [Subscription](../reference/Orb-API.json/components/schemas/Subscription).
  **/
  getSubscriptionsByCouponId(
    req: operations.GetSubscriptionsByCouponIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsByCouponIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsByCouponIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/coupons/{coupon_id}/subscriptions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSubscriptionsByCouponIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getSubscriptionsByCouponId200ApplicationJSONObject = plainToInstance(
                operations.GetSubscriptionsByCouponId200ApplicationJSON,
                httpRes?.data as operations.GetSubscriptionsByCouponId200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCoupons - Create a coupon
   *
   * This endpoint allows the creation of coupons, which can then be redeemed at subscription creation or plan change.
  **/
  postCoupons(
    req: operations.PostCouponsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCouponsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCouponsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/coupons";

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
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCouponsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * postCouponsCouponIdArchive - Archive a coupon
   *
   * This endpoint allows a coupon to be archived. Archived coupons can no longer be redeemed, and will be hidden from lists of active coupons. Additionally, once a coupon is archived, its redemption code can be reused for a different coupon.
  **/
  postCouponsCouponIdArchive(
    req: operations.PostCouponsCouponIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCouponsCouponIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCouponsCouponIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/coupons/{coupon_id}/archive", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCouponsCouponIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.coupon = plainToInstance(
                shared.Coupon,
                httpRes?.data as shared.Coupon,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
