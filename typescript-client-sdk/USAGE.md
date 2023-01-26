<!-- Start SDK Example Usage -->
```typescript
import { OrbApi, withSecurity} from "@orb/sdk";
import { GetPingResponse } from "@orb/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new OrbApi(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));

sdk.availability.getPing().then((res: GetPingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->