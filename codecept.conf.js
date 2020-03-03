exports.config = {
  tests: "grabCookie_test.js",
  output: "./output",
  helpers: {
    WebDriverIO: {
      url: "https://tw.buy.yahoo.com",
      user: "******",
      key: "******",
      desiredCapabilities: {
        platform: "Windows 10",
        name: "saucelabs-wdio4",
        tunnelIdentifier: "******"
      },
      browser: "internet explorer"
    }
  }
};
