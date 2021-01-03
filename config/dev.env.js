"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CLIENT_ID: 4,
  CLIENT_SECRET: '"eHmNt4hRGE5NiDHYdumVIgJoDe00m34GfwvfwjyS"',
  GRANT_TYPE: '"password"',
  WEBSITE_URL: '"http://testing.api.okatruck.com"'
});

// supplier -> 4 -> eHmNt4hRGE5NiDHYdumVIgJoDe00m34GfwvfwjyS http://testing.api.okatruck.com

// NODE_ENV: '"production"',
// CLIENT_ID: 3,
// CLIENT_SECRET:'"XG1iHjy335XTSKOXNxy6iGna5iM8tb0itNH1it8M"',
// GRANT_TYPE:'"password"',
// WEBSITE_URL:'"http://142.93.49.205"'

// NODE_ENV: '"development"',
// CLIENT_ID: 4,
//   CLIENT_SECRET:'"eHmNt4hRGE5NiDHYdumVIgJoDe00m34GfwvfwjyS"',
//   GRANT_TYPE:'"password"',
//   WEBSITE_URL:'"http://testing.api.okatruck.com"'
