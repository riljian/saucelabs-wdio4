### Context

* OS version: Windows 10
* Browser version: Internet Explorer 11.285.17134.0
* Selenium version: 3.141.0

### Expected behavior

Execute `grabCookie` successfully

### Actual behavior

Encounter `Connection refused` response

```json
{
   "stacktrace":"java.lang.RuntimeException: java.net.ConnectException: Connection refused: connect\r\n\tat org.openqa.selenium.remote.server.WebDriverServlet.lambda$handle$0(WebDriverServlet.java:240)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat sun.net.NetworkClient.doConnect(Unknown Source)\r\n\tat sun.net.www.http.HttpClient.openServer(Unknown Source)\r\n\tat sun.net.www.http.HttpClient.openServer(Unknown Source)\r\n\tat sun.net.www.http.HttpClient.parseHTTP(Unknown Source)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getInputStream0(Unknown Source)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getInputStream(Unknown Source)\r\n\tat java.net.HttpURLConnection.getResponseCode(Unknown Source)\r\n\tat org.openqa.selenium.grid.web.ReverseProxyHandler.execute(ReverseProxyHandler.java:111)\r\n\tat org.openqa.selenium.grid.session.remote.Passthrough.handle(Passthrough.java:35)\r\n\tat org.openqa.selenium.grid.session.remote.RemoteSession.execute(RemoteSession.java:129)\r\n\tat org.openqa.selenium.remote.server.WebDriverServlet.lambda$handle$0(WebDriverServlet.java:235)\r\n\t... 5 more\r\n",
   "message":"java.net.ConnectException: Connection refused: connect",
   "error":"unknown error",
   "stackTrace":[
      {
         "className":"org.openqa.selenium.remote.server.WebDriverServlet",
         "lineNumber":240,
         "methodName":"lambda$handle$0",
         "fileName":"WebDriverServlet.java"
      },
      {
         "className":"java.util.concurrent.Executors$RunnableAdapter",
         "lineNumber":-1,
         "methodName":"call",
         "fileName":null
      },
      {
         "className":"java.util.concurrent.FutureTask",
         "lineNumber":-1,
         "methodName":"run",
         "fileName":null
      },
      {
         "className":"java.util.concurrent.ThreadPoolExecutor",
         "lineNumber":-1,
         "methodName":"runWorker",
         "fileName":null
      },
      {
         "className":"java.util.concurrent.ThreadPoolExecutor$Worker",
         "lineNumber":-1,
         "methodName":"run",
         "fileName":null
      },
      {
         "className":"java.lang.Thread",
         "lineNumber":-1,
         "methodName":"run",
         "fileName":null
      }
   ]
}
```

### Steps to reproduce the behavior

1. `$ npm ci` install codeceptjs
2. update `user` `key` `tunnelIdentifier` field in `codecept.conf.js`
3. `$ npm run test` run the test