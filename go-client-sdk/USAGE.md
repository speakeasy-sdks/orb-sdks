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