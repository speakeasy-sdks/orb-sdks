<!-- Start SDK Example Usage -->
```python
import orbapi
from orbapi.models import operations, shared

s = orbapi.OrbAPI()
s.config_security(
    security=shared.Security(
        vessel_api_token=shared.SchemeVesselAPIToken(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetBatchCrmAccountRequest(
    query_params=operations.GetBatchCrmAccountQueryParams(
        access_token="sit",
        all_fields=False,
        ids="culpa",
    ),
)
    
res = s.accounts.batch(req)

if res.response_body is not None:
    # handle response
```
<!-- End SDK Example Usage -->