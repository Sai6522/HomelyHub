const _0xa0d71f = _0x4004;
(function (_0x54cdba, _0x5d9c65) {
  const _0x43e76e = _0x4004,
    _0x18569e = _0x54cdba();
  while (!![]) {
    try {
      const _0x25aa8a =
        (-parseInt(_0x43e76e(0x199)) / 0x1) *
          (-parseInt(_0x43e76e(0x194)) / 0x2) +
        (-parseInt(_0x43e76e(0x19a)) / 0x3) *
          (-parseInt(_0x43e76e(0x18c)) / 0x4) +
        (-parseInt(_0x43e76e(0x184)) / 0x5) *
          (-parseInt(_0x43e76e(0x19c)) / 0x6) +
        -parseInt(_0x43e76e(0x180)) / 0x7 +
        (-parseInt(_0x43e76e(0x19b)) / 0x8) *
          (parseInt(_0x43e76e(0x197)) / 0x9) +
        (parseInt(_0x43e76e(0x18a)) / 0xa) *
          (parseInt(_0x43e76e(0x187)) / 0xb) +
        -parseInt(_0x43e76e(0x188)) / 0xc;
      if (_0x25aa8a === _0x5d9c65) break;
      else _0x18569e["push"](_0x18569e["shift"]());
    } catch (_0x59458c) {
      _0x18569e["push"](_0x18569e["shift"]());
    }
  }
})(_0x32e5, 0x625ee);
const express = require(_0xa0d71f(0x198)),
  propertyRoutes = require(_0xa0d71f(0x190)),
  userRoutes = require(_0xa0d71f(0x193)),
  cookieParser = require(_0xa0d71f(0x182)),
  cors = require(_0xa0d71f(0x196)),
  path = require(_0xa0d71f(0x186)),
  app = express();
function _0x4004(_0x36eddf, _0xfa13ff) {
  const _0x32e5db = _0x32e5();
  return (
    (_0x4004 = function (_0x4004e1, _0x511c26) {
      _0x4004e1 = _0x4004e1 - 0x17d;
      let _0x2f312a = _0x32e5db[_0x4004e1];
      return _0x2f312a;
    }),
    _0x4004(_0x36eddf, _0xfa13ff)
  );
}
console[_0xa0d71f(0x17f)](
  process[_0xa0d71f(0x17e)][_0xa0d71f(0x185)] === _0xa0d71f(0x191)
),
  app[_0xa0d71f(0x192)](express[_0xa0d71f(0x18d)]()),
  app[_0xa0d71f(0x192)](cookieParser()),
  app[_0xa0d71f(0x192)](cors()),
  app["use"](_0xa0d71f(0x195), propertyRoutes),
  app[_0xa0d71f(0x192)](_0xa0d71f(0x181), userRoutes);
function _0x32e5() {
  const _0x243b2d = [
    "./routes/propertyRoutes",
    "production",
    "use",
    "./routes/userRoutes",
    "10EhoGQS",
    "/api/v1/rent/listing",
    "cors",
    "11241vktXzE",
    "express",
    "98323LWDZfG",
    "470298RRvAmH",
    "3928RcDSbm",
    "843606jHghCD",
    "../frontend/build/index.html",
    "env",
    "log",
    "380443XIXxaf",
    "/api/v1/rent/user",
    "cookie-parser",
    "sendFile",
    "5ZwBtqk",
    "NODE_ENV",
    "path",
    "3938zXdeDK",
    "6135192sfCftb",
    "exports",
    "4630BpIZRJ",
    "app\x20runs\x20in\x20production",
    "20MNUoNj",
    "json",
    "resolve",
    "get",
  ];
  _0x32e5 = function () {
    return _0x243b2d;
  };
  return _0x32e5();
}
process[_0xa0d71f(0x17e)][_0xa0d71f(0x185)] === _0xa0d71f(0x191) &&
  (console[_0xa0d71f(0x17f)](_0xa0d71f(0x18b)),
  app[_0xa0d71f(0x192)](
    express["static"](path["join"](__dirname, "../frontend/build"))
  ),
  app[_0xa0d71f(0x18f)]("*", (_0x4887bc, _0x1a856c) => {
    const _0x394a17 = _0xa0d71f;
    _0x1a856c[_0x394a17(0x183)](
      path[_0x394a17(0x18e)](__dirname, _0x394a17(0x17d))
    );
  }));
module[_0xa0d71f(0x189)] = app;
