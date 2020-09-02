# FirebaseJsBug3715
App to reproduce https://github.com/firebase/firebase-js-sdk/issues/3715

## Instructions

I was unable to reproduce the issue myself.
These are the steps that I followed that anyone can also try.

1. Clone this Git repository.
1. Edit index.ts to use your own apiKey, appId, and projectId.
1. `npm install`
1. `ts-node index.ts`
1. Terminate the application by pressing CTRL+C.

Here is the output that I see, which I believe is expected:

```
Response =[{"XXX":1},{"XXX":1},{"XXX":2}]
Response =[{"XXX":1},{"XXX":1},{"XXX":2}]
Response =[{"XXX":1},{"XXX":1},{"XXX":2}]
```

The issue reports that this is causing an error; however, I see it completing successfully.
