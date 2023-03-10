# Orb Python SDK

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install orbapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import orbapi
from orbapi.models import operations, shared

s = orbapi.OrbAPI()
s.config_security(
    security=shared.Security(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
res = s.availability.get_ping()

if res.get_ping_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Availability

* `get_ping` - Check availability

### Coupon

* `get_coupons` - List coupons
* `get_coupons_coupon_id` - Retrieve a coupon
* `get_subscriptions_by_coupon_id` - List subscriptions for a coupon
* `post_coupons` - Create a coupon
* `post_coupons_coupon_id_archive` - Archive a coupon

### Credits

* `get_customers_customer_id_credits` - Retrieve credit balance
* `get_customers_customer_id_credits_ledger` - View credits ledger
* `post_customers_customer_id_credits_ledger_entry` - Add credit ledger entry

### Customer

* `delete_customers_customer_id` - Delete a customer
* `get_customer_costs` - View customer costs by external customer ID
* `get_customer_costs_by_id` - View customer costs
* `get_customers` - List customers
* `get_customers_customer_id` - Retrieve a customer
* `get_customers_customer_id_balance_transactions` - Get customer balance transactions
* `get_customers_external_customer_id_external_customer_id` - Retrieve a customer by external ID
* `patch_customers_customer_id_usage` - Amend customer usage
* `patch_external_customers_customer_id_usage` - Amend customer usage by external ID
* `post_customers` - Create customer
* `put_customers_customer_id` - Update customer
* `put_customers_external_customer_id_external_customer_id` - Update a customer by external ID

### Event

* `post_events_search` - Search events
* `post_ingest` - Ingest events
* `put_events_deprecate_event_id` - Deprecate single event
* `put_events_event_id` - Amend single event

### Invoice

* `get_invoice_invoice_id` - Retrieve an Invoice
* `get_invoices` - List invoices
* `get_invoices_upcoming` - Retrieve upcoming invoice
* `post_invoices_invoice_id_void` - Void an invoice

### Plan

* `get_external_plans_plan_id` - Retrieve a plan by external plan ID
* `get_plans` - List plans
* `get_plans_plan_id` - Retrieve a plan

### Subscription

* `get_subscriptions` - List subscriptions
* `get_subscriptions_costs_by_id` - View subscription costs
* `get_subscriptions_subscription_id` - Retrieve a subscription
* `get_subscriptions_subscription_id_schedule` - View subscription schedule
* `get_subscriptions_subscription_id_usage` - View subscription usage
* `post_subscriptions` - Create subscription
* `post_subscriptions_subscription_id_cancel` - Cancel subscription
* `post_subscriptions_subscription_id_schedule_plan_change` - Schedule plan change
* `post_subscriptions_subscription_id_unschedule_pending_cancellation` - Unschedule pending cancellation
* `post_subscriptions_subscription_id_unschedule_pending_plan_changes` - Unschedule pending plan changes
* `post_subscriptions_subscription_id_update_fixed_fee_quantity` - Update fixed fee quantity

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
