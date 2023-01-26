import requests
from typing import Optional
from orbapi.models import shared, operations
from . import utils

class Coupon:
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

    
    def get_coupons(self, request: operations.GetCouponsRequest) -> operations.GetCouponsResponse:
        r"""List coupons
        This endpoint returns a list of all [coupons](../reference/Orb-API.json/components/schemas/Coupon) for an account in a list format. 
        
        The list of coupons is ordered starting from the most recently created coupon. The response also includes [`pagination_metadata`](../reference/Orb-API.json/components/schemas/Pagination-metadata), which lets the caller retrieve the next page of results if they exist. More information about pagination can be found in the [Pagination-metadata schema](../reference/Orb-API.json/components/schemas/Pagination-metadata).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/coupons"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCouponsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCoupons200ApplicationJSON])
                res.get_coupons_200_application_json_object = out

        return res

    
    def get_coupons_coupon_id(self, request: operations.GetCouponsCouponIDRequest) -> operations.GetCouponsCouponIDResponse:
        r"""Retrieve a coupon
        This endpoint retrieves a coupon by its ID. To fetch coupons by their redemption code, use the [List coupons](../reference/Orb-API.json/paths/~1coupons/get) endpoint with the `redemption_code` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/coupons/{coupon_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCouponsCouponIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Coupon])
                res.coupon = out

        return res

    
    def get_subscriptions_by_coupon_id(self, request: operations.GetSubscriptionsByCouponIDRequest) -> operations.GetSubscriptionsByCouponIDResponse:
        r"""List subscriptions for a coupon
        This endpoint returns a list of all subscriptions that have redeemed a given coupon as a [paginated](../docs/Pagination.md) list, ordered starting from the most recently created subscription. For a full discussion of the subscription resource, see [Subscription](../reference/Orb-API.json/components/schemas/Subscription).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/coupons/{coupon_id}/subscriptions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsByCouponIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSubscriptionsByCouponID200ApplicationJSON])
                res.get_subscriptions_by_coupon_id_200_application_json_object = out

        return res

    
    def post_coupons(self, request: operations.PostCouponsRequest) -> operations.PostCouponsResponse:
        r"""Create a coupon
        This endpoint allows the creation of coupons, which can then be redeemed at subscription creation or plan change.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/coupons"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCouponsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_coupons_coupon_id_archive(self, request: operations.PostCouponsCouponIDArchiveRequest) -> operations.PostCouponsCouponIDArchiveResponse:
        r"""Archive a coupon
        This endpoint allows a coupon to be archived. Archived coupons can no longer be redeemed, and will be hidden from lists of active coupons. Additionally, once a coupon is archived, its redemption code can be reused for a different coupon.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/coupons/{coupon_id}/archive", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCouponsCouponIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Coupon])
                res.coupon = out

        return res

    