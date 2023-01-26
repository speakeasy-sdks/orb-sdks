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
                VesselAPIToken: shared.SchemeVesselAPIToken{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetBatchCrmAccountRequest{
        QueryParams: operations.GetBatchCrmAccountQueryParams{
            AccessToken: "sit",
            AllFields: false,
            Ids: "culpa",
        },
    }
    
    res, err := s.Accounts.Batch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseBody != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->