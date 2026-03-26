1. **If you will get below error because of proxy/organization network:**



*Error: unable to get local issuer certificate at TLSSocket.onConnectSecure (node:\_tls\_wrap:1695:34) at TLSSocket.emit (node:events:524:28) at TLSSocket.\_finishInit (node:\_tls\_wrap:1093:8) at ssl.onhandshakedone (node:\_tls\_wrap:879:12) { code: 'UNABLE\_TO\_GET\_ISSUER\_CERT\_LOCALLY'*



***Use below command:***

*setx NODE\_TLS\_REJECT\_UNAUTHORIZED 0*





<b>2. Inside our directory, you can run several commands:</b>



  **npx playwright test**

&nbsp;   Runs the end-to-end tests.



  **npx playwright test --ui**

&nbsp;   Starts the interactive UI mode.



  **npx playwright test --project=chromium**

&nbsp;   Runs the tests only on Desktop Chrome.



  **npx playwright test example**

&nbsp;   Runs the tests in a specific file.



  **npx playwright test --debug**

&nbsp;   Runs the tests in debug mode.



  **npx playwright codegen**

&nbsp;   Auto generate tests with Codegen.



We suggest that you begin by typing:



&nbsp;   npx playwright test



**3. Running Test**



npx playwright test

runs all tests on all browsers in headless mode



npx playwright test --workers 3

runs with 3 workers in parallel



npx playwright test one.spec.js

runs a specific test file



npx playwright test one.spec.js two.spec.js

runs the files specified



npx playwright test one two

runs files that have one or two in the file name



npx playwright test -g "check title"

runs test with the title



npx playwright test --project=chromium

runs on specific browser



npx playwright test --headed

runs tests in headed mode



npx playwright test --debug

debug tests



npx playwright test example.spec.js --debug

debug specific test file



npx playwright test example.spec.js:21 --debug

debug starting from specific line where test starts

