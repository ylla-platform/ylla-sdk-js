# ylla-sdk-js

Ylla javascript sdk


## installation

    npm install --save ylla-sdk-js
    
## usage

Node.js:

    const ylla = require('ylla-sdk-js');
    
Browser (with your own bundler):

    const ylla = require('ylla-sdk-js');
    
Browser (vanilla.js - no bundler):

    <script src="/path/to/ylla-sdk/dist/ylla-sdk.js"></script>
    <script>
        console.log(typeof window.YLLA);
        const auth = YLLA.login(user, pass);
    </script>
