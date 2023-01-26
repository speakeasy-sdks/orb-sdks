import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Customer {
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
   * deleteCustomersCustomerId - Delete a customer
   *
   * This performs a deletion of this customer, its subscriptions, and its invoices. This operation is irreversible. Note that this is a _soft_ deletion, but the data will be inaccessible through the API and Orb dashboard. For hard-deletion, please reach out to the Orb team directly.
   * 
   * **Note**: This operation happens asynchronously and can be expected to take a few minutes to propagate to related resources. However, querying for the customer on subsequent GET requests while deletion is in process will reflect its deletion with a `deleted: true` property. Once the customer deletion has been fully processed, the customer will not be returned in the API.
  **/
  deleteCustomersCustomerId(
    req: operations.DeleteCustomersCustomerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomersCustomerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomersCustomerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/{customer_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCustomersCustomerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomerCosts - View customer costs by external customer ID
   *
   * This endpoint's resource and semantics exactly mirror [View customer costs](../reference/Orb-API.json/paths/~1customers~1{customer_id}~1costs/get) but operates on an [external customer ID](../docs/Customer-ID-Aliases.md) rather than an Orb issued identifier.
  **/
  getCustomerCosts(
    req: operations.GetCustomerCostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomerCostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomerCostsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/external_customer_id/{external_customer_id}/costs", req.pathParams);
    
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
        const res: operations.GetCustomerCostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getCustomerCosts200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomerCostsById - View customer costs
   *
   * This endpoint is used to fetch a day-by-day snapshot of a customer's costs in Orb, calculated by applying pricing information to the underlying usage (see the [subscription usage endpoint](../reference/Orb-API.json/paths/~1subscriptions~1{subscription_id}~1usage/get) to fetch usage per metric, in usage units rather than a currency). 
   * 
   * This endpoint can be leveraged for internal tooling and to provide a more transparent billing experience for your end users:
   * 
   * 1. Understand the cost breakdown per line item historically and in real-time for the current billing period. 
   * 2. Provide customer visibility into how different services are contributing to the overall invoice with a per-day timeseries (as compared to the [upcoming invoice](../reference/Orb-API.json/paths/~1invoices~1upcoming/get) resource, which represents a snapshot for the current period).
   * 3. Assess how minimums and discounts affect your customers by teasing apart costs directly as a result of usage, as opposed to minimums and discounts at the plan and price level.
   * 4. Gain insight into key customer health metrics, such as the percent utilization of the minimum committed spend.
   * 
   * ## Fetching subscriptions
   * By default, this endpoint fetches the currently active subscription for the customer, and returns cost information for the subscription's current billing period, broken down by each participating price. If there are no currently active subscriptions, this will instead default to the most recently active subscription or return an empty series if none are found. For example, if your plan charges for compute hours, job runs, and data syncs, then this endpoint would provide a daily breakdown of your customer's cost for each of those axes.
   * 
   * If timeframe bounds are specified, Orb fetches all subscriptions that were active in that timeframe. If two subscriptions overlap on a single day, costs from each price will be summed, and prices for both subscriptions will be included in the breakdown.
   * 
   * 
   * ## Prepaid plans
   * For plans that include prices which deduct credits rather than accrue in-arrears charges in a billable currency, this endpoint will return the total deduction amount, in credits, for the specified timeframe. 
   * 
   * 
   * ## Cumulative subtotals and totals
   * 
   * Since the subtotal and total must factor in any billing-period level discounts and minimums, it's most meaningful to consider costs relative to the start of the subscription's billing period. As a result, by default this endpoint returns cumulative totals since the beginning of the billing period. In particular, the `timeframe_start` of a returned timeframe window is *always* the beginning of the billing period and `timeframe_end` is incremented one day at a time to build the result.
   * 
   * A customer that uses a few API calls a day but has a minimum commitment might exhibit the following pattern for their subtotal and total in the first few days of the month. Here, we assume that each API call is $2.50, the customer's plan has a monthly minimum of $50 for this price, and that the subscription's billing period bounds are aligned to the first of the month:
   * 
   * | timeframe_start | timeframe_end | Cumulative usage | Subtotal | Total (incl. commitment)  |
   * | -----------| ----------- | ----------- | ----------- |----------- |
   * | 2023-02-01 | 2023-02-02 | 9 | $22.50 | $50.00 |
   * | 2023-02-01 | 2023-02-03 | 19 | $47.50 | $50.00 |
   * | 2023-02-01 | 2023-02-04 | 20 | $50.00 | $50.00 |
   * | 2023-02-01 | 2023-02-05 | 28 | $70.00 | $70.00 |
   * | 2023-02-01 | 2023-02-06 | 36 | $90.00 | $90.00 |
   * 
   * 
   * ### Periodic values
   * When the query parameter `view_mode=periodic` is specified, Orb will return an incremental day-by-day view of costs. In this case, there will always be a one-day difference between `timeframe_start` and `timeframe_end` for the timeframes returned. This is a transform on top of the cumulative costs, calculated by taking the difference of each timeframe with the last. Note that in the above example, the `Total` value would be 0 for the second two data points, since the minimum commitment has not yet been hit and each day is not contributing anything to the total cost.
   * 
   * ## Timeframe bounds
   * If no timeframe bounds are specified, the response will default to the current billing period for the customer's subscription. For subscriptions that have ended, this will be the billing period when they were last active. If the subscription starts or ends within the timeframe, the response will only include windows where the subscription is active.
   *  
   * As noted above, `timeframe_start` for a given cumulative datapoint is always the beginning of the billing period, and `timeframe_end` is incremented one day at a time to construct the response. When a timeframe is passed in that is not aligned to the current subscription's billing period, the response will contain cumulative totals from multiple billing periods.
   * 
   * Suppose the queried customer has a subscription aligned to the 15th of every month. If this endpoint is queried with the date range `2023-06-01` - `2023-07-01`, the first data point will represent about half a billing period's worth of costs, accounting for accruals from the start of the billing period and inclusive of the first day of the timeframe (`timeframe_start = 2023-05-15 00:00:00`, `timeframe_end = 2023-06-02 00:00:00`)
   * 
   * | datapoint index | timeframe_start | timeframe_end |
   * | ----------- | -----------| ----------- |
   * | 0 | 2023-05-15 | 2023-06-02 |
   * | 1 | 2023-05-15 | 2023-06-03 |
   * | 2 | ... | ... |
   * | 3 | 2023-05-15 | 2023-06-14 |
   * | 4 | 2023-06-15 | 2023-06-16 |
   * | 5 | 2023-06-15 | 2023-06-17 |
   * | 6 | ... | ... |
   * | 7 | 2023-06-15 | 2023-07-01 |
   * 
   * You can see this sliced timeframe visualized [here](https://i.imgur.com/TXhYgme.png).
   * 
   * ## Grouping by custom attributes
   * In order to view costs grouped by a specific _attribute_ that each event is tagged with (i.e. `cluster`), you can additionally specify a `group_by` key. The `group_by` key denotes the event property on which to group.
   * 
   * When returning grouped costs, a separate `price_group` object in the `per_price_costs` array is returned for each value of the `group_by` key present in your events. The `subtotal` value of the `per_price_costs` object is the sum of each `price_group`'s total. 
   * 
   * Orb expects events will contain values in the `properties` dictionary that correspond to the `group_by` key specified. By default, Orb will return a `null` group (i.e. events that match the metric but do not have the key set). Currently, it is only possible to view costs grouped by a single attribute at a time.
   * 
   * ### Matrix prices
   * When a price uses matrix pricing, it's important to view costs grouped by those matrix dimensions. Orb will return `price_groups` with the `grouping_key` and `secondary_grouping_key` based on the matrix price definition, for each `grouping_value` and `secondary_grouping_value` available.
   * 
  **/
  getCustomerCostsById(
    req: operations.GetCustomerCostsByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomerCostsByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomerCostsByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/{customer_id}/costs", req.pathParams);
    
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
        const res: operations.GetCustomerCostsByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getCustomerCostsById200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomers - List customers
   *
   * 
   * 
   * This endpoint returns a list of all customers for an account. The list of customers is ordered starting from the most recently created customer. This endpoint follows Orb's [standardized pagination format](../docs/Pagination.md).
   * 
   * See [Customer](../reference/Orb-API.json/components/schemas/Customer) for an overview of the customer model.
  **/
  getCustomers(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomersResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/customers";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCustomersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getCustomers200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomersCustomerId - Retrieve a customer
   *
   * This endpoint is used to fetch customer details given an identifier. If the `Customer` is in the process of being deleted, only the properties `id` and `deleted: true` will be returned.
   * 
   * See the [Customer resource](Orb-API.json/components/schemas/Customer) for a full discussion of the Customer model.
   * 
  **/
  getCustomersCustomerId(
    req: operations.GetCustomersCustomerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomersCustomerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomersCustomerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/{customer_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCustomersCustomerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.customer = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomersCustomerIdBalanceTransactions - Get customer balance transactions
   *
   * # The customer balance
   * 
   * The customer balance is an amount in the customer's currency, which Orb automatically applies to subsequent invoices. This balance can be adjusted manually via Orb's webapp on the customer details page. You can use this balance to provide a fixed mid-period credit to the customer. Commonly, this is done due to system downtime/SLA violation, or an adhoc adjustment discussed with the customer.
   * 
   * If the balance is a positive value at the time of invoicing, it represents that the customer has credit that should be used to offset the amount due on the next issued invoice. In this case, Orb will automatically reduce the next invoice by the balance amount, and roll over any remaining balance if the invoice is fully discounted.
   * 
   * If the balance is a negative value at the time of invoicing, Orb will increase the invoice's amount due with a positive adjustment, and reset the balance to 0.
   * 
   * This endpoint retrieves all customer balance transactions in reverse chronological order for a single customer, providing a complete audit trail of all adjustments and invoice applications.
   * 
   * ## Eligibility
   * 
   * The customer balance can only be applied to invoices or adjusted manually if invoices are not synced to a separate invoicing provider. If a payment gateway such as Stripe is used, the balance will be applied to the invoice before forwarding payment to the gateway.
  **/
  getCustomersCustomerIdBalanceTransactions(
    req: operations.GetCustomersCustomerIdBalanceTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomersCustomerIdBalanceTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomersCustomerIdBalanceTransactionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/{customer_id}/balance_transactions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCustomersCustomerIdBalanceTransactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getCustomersCustomerIdBalanceTransactions200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomersExternalCustomerIdExternalCustomerId - Retrieve a customer by external ID
   *
   * This endpoint is used to fetch customer details given an `external_customer_id` (see [Customer ID Aliases](../docs/Customer-ID-Aliases.md)).
   * 
   * Note that the resource and semantics of this endpoint exactly mirror [Get Customer](Orb-API.json/paths/~1customers/get).
  **/
  getCustomersExternalCustomerIdExternalCustomerId(
    req: operations.GetCustomersExternalCustomerIdExternalCustomerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomersExternalCustomerIdExternalCustomerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomersExternalCustomerIdExternalCustomerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/external_customer_id/{external_customer_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCustomersExternalCustomerIdExternalCustomerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.customer = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * patchCustomersCustomerIdUsage - Amend customer usage
   *
   * This endpoint is used to amend usage within a timeframe for a customer that has an active subscription.
   * 
   * This endpoint will mark _all_ existing events within `[timeframe_start, timeframe_end)` as _ignored_  for billing  purposes, and Orb will only use the _new_ events passed in the body of this request as the source of truth for that timeframe moving forwards. Note that a given time period can be amended any number of times, so events can be overwritten in subsequent calls to this endpoint.
   * 
   * This is a powerful and audit-safe mechanism to retroactively change usage data in cases where you need to:
   * - decrease historical usage consumption because of degraded service availability in your systems
   * - account for gaps from your usage reporting mechanism
   * - make point-in-time fixes for specific event records, while retaining the original time of usage and associated metadata
   * 
   * This amendment API is designed with two explicit goals:
   * 1. Amendments are **always audit-safe**. The amendment process will still retain original events in the timeframe, though they will be ignored for billing calculations. For auditing and data fidelity purposes, Orb never overwrites or permanently deletes ingested usage data.
   * 2. Amendments always preserve data **consistency**. In other words, either an amendment is fully processed by the system (and the new events for the timeframe are honored rather than the existing ones) or the amendment request fails. To maintain this important property, Orb prevents _partial event ingestion_ on this endpoint.
   * 
   * 
   * ## Response semantics
   *  - Either all events are ingested successfully, or all fail to ingest (returning a `4xx` or `5xx` response code).
   * - Any event that fails schema validation will lead to a `4xx` response. In this case, to maintain data consistency, Orb will not ingest any events and will also not deprecate existing events in the time period.
   * - You can assume that the amendment is successful on receipt of a `2xx` response.While a successful response from this endpoint indicates that the new events have been ingested, updating usage totals happens asynchronously and may be delayed by a few minutes. 
   * 
   * As emphasized above, Orb will never show an inconsistent state (e.g. in invoice previews or dashboards); either it will show the existing state (before the amendment) or the new state (with new events in the requested timeframe).
   * 
   * 
   * ## Sample request body
   * 
   * ```json
   * {
   * 	"events": [{
   * 		"event_name": "payment_processed",
   * 		"timestamp": "2022-03-24T07:15:00Z",
   * 		"properties": {
   * 			"amount": 100
   * 		}
   * 	}, {
   * 		"event_name": "payment_failed",
   * 		"timestamp": "2022-03-24T07:15:00Z",
   * 		"properties": {
   * 			"amount": 100
   * 		}
   * 	}]
   * }
   * ```
   * 
   * ## Request Validation
   * - The `timestamp` of each event reported must fall within the bounds of `timeframe_start` and `timeframe_end`. As with ingestion, all timestamps must be sent in ISO8601 format with UTC timezone offset.
   * 
   * - Orb **does not accept an `idempotency_key`** with each event in this endpoint, since the entirety of the event list must be ingested to ensure consistency. On retryable errors, you should retry the request in its entirety, and assume that the amendment operation has not succeeded until receipt of a `2xx`.
   * 
   * - Both `timeframe_start` and `timeframe_end` must be timestamps in the past. Furthermore, Orb will generally validate that the `timeframe_start` and `timeframe_end` fall within the customer's _current_ subscription billing period. However, Orb does allow amendments while in the grace period of the previous billing period; in this instance, the timeframe can start before the current period.
   * 
   * 
   * ## API Limits
   * Note that Orb does not currently enforce a hard rate-limit for API usage or a maximum request payload size. Similar to the event ingestion API, this API is architected for high-throughput ingestion. It is also safe to _programmatically_ call this endpoint if your system can automatically detect a need for historical amendment.
   * 
   * In order to overwrite timeframes with a very large number of events, we suggest using multiple calls with small adjacent (e.g. every hour) timeframes.
  **/
  patchCustomersCustomerIdUsage(
    req: operations.PatchCustomersCustomerIdUsageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchCustomersCustomerIdUsageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchCustomersCustomerIdUsageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/{customer_id}/usage", req.pathParams);

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
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchCustomersCustomerIdUsageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchCustomersCustomerIdUsage200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchCustomersCustomerIdUsage400ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * patchExternalCustomersCustomerIdUsage - Amend customer usage by external ID
   *
   * This endpoint's resource and semantics exactly mirror [Amend customer usage](../reference/Orb-API.json/paths/~1customers~1{customer_id}~1usage/patch) but operates on an [external customer ID](../docs/Customer-ID-Aliases.md) rather than an Orb issued identifier.
  **/
  patchExternalCustomersCustomerIdUsage(
    req: operations.PatchExternalCustomersCustomerIdUsageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchExternalCustomersCustomerIdUsageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchExternalCustomersCustomerIdUsageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/external_customer_id/{external_customer_id}/usage", req.pathParams);

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
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchExternalCustomersCustomerIdUsageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchExternalCustomersCustomerIdUsage200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.patchExternalCustomersCustomerIdUsage400ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCustomers - Create customer
   *
   * This operation is used to create an Orb customer, who is party to the core billing relationship. See [Customer](../reference/Orb-API.json/components/schemas/Customer) for an overview of the customer resource.
   * 
   * This endpoint is critical in the following Orb functionality:
   * * Automated charges can be configured by setting `payment_provider` and `payment_provider_id` to automatically issue invoices
   * * [Customer ID Aliases](../docs/Customer-ID-Aliases.md) can be configured by setting `external_customer_id`
   * * [Timezone localization](../docs/Timezone-localization.md) can be configured on a per-customer basis by setting the `timezone` parameter
  **/
  postCustomers(
    req: operations.PostCustomersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCustomersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCustomersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/customers";

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
        const res: operations.PostCustomersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.customer = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCustomersCustomerId - Update customer
   *
   * This endpoint can be used to update the `payment_provider`, `payment_provider_id`, `name`, `email`, `shipping_address`, and `billing_address` of an existing customer.
   * 
   * Other fields on a customer are currently immutable.
  **/
  putCustomersCustomerId(
    req: operations.PutCustomersCustomerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCustomersCustomerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCustomersCustomerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/{customer_id}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutCustomersCustomerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.customer = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCustomersExternalCustomerIdExternalCustomerId - Update a customer by external ID
   *
   * This endpoint is used to update customer details given an `external_customer_id` (see [Customer ID Aliases](../docs/Customer-ID-Aliases.md)).
   * 
   * Note that the resource and semantics of this endpoint exactly mirror [Update Customer](Orb-API.json/paths/~1customers~1{customer_id}/put).
  **/
  putCustomersExternalCustomerIdExternalCustomerId(
    req: operations.PutCustomersExternalCustomerIdExternalCustomerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCustomersExternalCustomerIdExternalCustomerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCustomersExternalCustomerIdExternalCustomerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/customers/external_customer_id/{external_customer_id}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutCustomersExternalCustomerIdExternalCustomerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.customer = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
