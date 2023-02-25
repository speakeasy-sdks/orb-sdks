<!-- Start SDK Example Usage -->
```typescript
import {
  GetPingResponse 
} from "@orb/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { OrbAPI } from "@orb/sdk";

const sdk = new OrbAPI({
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
});

sdk.availability.getPing().then((res: GetPingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->