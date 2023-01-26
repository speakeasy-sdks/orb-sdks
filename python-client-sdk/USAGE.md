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