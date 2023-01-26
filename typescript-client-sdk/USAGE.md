<!-- Start SDK Example Usage -->
```typescript
import { OrbApi, withSecurity} from "@orb/sdk";
import { GetBatchCrmAccountRequest, GetBatchCrmAccountResponse } from "@orb/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new OrbApi(withSecurity(
  security: {
    vesselAPIToken: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetBatchCrmAccountRequest = {
  queryParams: {
    accessToken: "sit",
    allFields: false,
    ids: "culpa",
  },
};

sdk.accounts.batch(req).then((res: GetBatchCrmAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->