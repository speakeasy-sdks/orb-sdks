# Orb SDKs

SDKs for the [Orb API](https://docs.withorb.com/docs/orb-docs/overview). Orb is developer-first billing infrastructure that’s flexible, reliable, and accurate—at every stage of your growth.

<!-- Start SDK Installation -->
## SDK Installation

Please see instructions on fetching from package managers for each language specific SDK.

<!-- End SDK Installation -->

## SDK Example Usage

Please see example usage for each language specific SDK. Here is an example for Go.

<!-- Start SDK Example Usage -->
```go
package main

import (
    "github.com/speakeasy-sdks/orb-sdks/go-client-sdk"
    "github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
    "github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BearerAuth: shared.SchemeBearerAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    res, err := s.Availability.GetPing(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPing200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

## Authentication

API Keys can be issued in the Orb's web application. Orb recommends that separate API keys be created for each service that you'd like to attribute actions to separately (e.g. a key for ingesting events, and a key for manipulating customer balances automatically). 
This also allows you to rotate keys and revoke access more flexibly.
Provide your bearer token in the Authorization header when making requests to protected resources.

```bash
Example: Authorization: Bearer 123
```

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Availability

* `GetPing` - Check availability

### Coupon

* `GetCoupons` - List coupons
* `GetCouponsCouponID` - Retrieve a coupon
* `GetSubscriptionsByCouponID` - List subscriptions for a coupon
* `PostCoupons` - Create a coupon
* `PostCouponsCouponIDArchive` - Archive a coupon

### Credits

* `GetCustomersCustomerIDCredits` - Retrieve credit balance
* `GetCustomersCustomerIDCreditsLedger` - View credits ledger
* `PostCustomersCustomerIDCreditsLedgerEntry` - Add credit ledger entry

### Customer

* `DeleteCustomersCustomerID` - Delete a customer
* `GetCustomerCosts` - View customer costs by external customer ID
* `GetCustomerCostsByID` - View customer costs
* `GetCustomers` - List customers
* `GetCustomersCustomerID` - Retrieve a customer
* `GetCustomersCustomerIDBalanceTransactions` - Get customer balance transactions
* `GetCustomersExternalCustomerIDExternalCustomerID` - Retrieve a customer by external ID
* `PatchCustomersCustomerIDUsage` - Amend customer usage
* `PatchExternalCustomersCustomerIDUsage` - Amend customer usage by external ID
* `PostCustomers` - Create customer
* `PutCustomersCustomerID` - Update customer
* `PutCustomersExternalCustomerIDExternalCustomerID` - Update a customer by external ID

### Event

* `PostEventsSearch` - Search events
* `PostIngest` - Ingest events
* `PutEventsDeprecateEventID` - Deprecate single event
* `PutEventsEventID` - Amend single event

### Invoice

* `GetInvoiceInvoiceID` - Retrieve an Invoice
* `GetInvoices` - List invoices
* `GetInvoicesUpcoming` - Retrieve upcoming invoice
* `PostInvoicesInvoiceIDVoid` - Void an invoice

### Plan

* `GetExternalPlansPlanID` - Retrieve a plan by external plan ID
* `GetPlans` - List plans
* `GetPlansPlanID` - Retrieve a plan

### Subscription

* `GetSubscriptions` - List subscriptions
* `GetSubscriptionsCostsByID` - View subscription costs
* `GetSubscriptionsSubscriptionID` - Retrieve a subscription
* `GetSubscriptionsSubscriptionIDSchedule` - View subscription schedule
* `GetSubscriptionsSubscriptionIDUsage` - View subscription usage
* `PostSubscriptions` - Create subscription
* `PostSubscriptionsSubscriptionIDCancel` - Cancel subscription
* `PostSubscriptionsSubscriptionIDSchedulePlanChange` - Schedule plan change
* `PostSubscriptionsSubscriptionIDUnschedulePendingCancellation` - Unschedule pending cancellation
* `PostSubscriptionsSubscriptionIDUnschedulePendingPlanChanges` - Unschedule pending plan changes
* `PostSubscriptionsSubscriptionIDUpdateFixedFeeQuantity` - Update fixed fee quantity

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
