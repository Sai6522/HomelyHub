function _0x5b18(_0x2c4af1, _0x46bf8b) {
  const _0x5f2452 = _0x5f24();
  return (
    (_0x5b18 = function (_0x5b1864, _0x30b362) {
      _0x5b1864 = _0x5b1864 - 0x19e;
      let _0x514351 = _0x5f2452[_0x5b1864];
      return _0x514351;
    }),
    _0x5b18(_0x2c4af1, _0x46bf8b)
  );
}
const _0x474602 = _0x5b18;
function _0x5f24() {
  const _0x46ab08 = [
    "300897FeykQX",
    "542764bLeNjV",
    "get",
    "797528QoiGrY",
    "../controllers/propertyController",
    "getProperties",
    "406377THWgkZ",
    "270xzJesl",
    "route",
    "31578AXRqqZ",
    "../controllers/authController",
    "/:id",
    "166571vvcDCl",
    "345PdkwtT",
    "2564205OGCuBP",
    "12mFCKiV",
    "exports",
  ];
  _0x5f24 = function () {
    return _0x46ab08;
  };
  return _0x5f24();
}
(function (_0x21a391, _0x131ee8) {
  const _0x472ffe = _0x5b18,
    _0xb1956f = _0x21a391();
  while (!![]) {
    try {
      const _0x3139ab =
        -parseInt(_0x472ffe(0x1a6)) / 0x1 +
        parseInt(_0x472ffe(0x1ac)) / 0x2 +
        (parseInt(_0x472ffe(0x1ab)) / 0x3) *
          (-parseInt(_0x472ffe(0x1a9)) / 0x4) +
        (parseInt(_0x472ffe(0x1a7)) / 0x5) *
          (-parseInt(_0x472ffe(0x1a3)) / 0x6) +
        -parseInt(_0x472ffe(0x1a8)) / 0x7 +
        -parseInt(_0x472ffe(0x1ae)) / 0x8 +
        (-parseInt(_0x472ffe(0x1a0)) / 0x9) *
          (-parseInt(_0x472ffe(0x1a1)) / 0xa);
      if (_0x3139ab === _0x131ee8) break;
      else _0xb1956f["push"](_0xb1956f["shift"]());
    } catch (_0x3883e9) {
      _0xb1956f["push"](_0xb1956f["shift"]());
    }
  }
})(_0x5f24, 0x2f564);
const express = require("express"),
  propertyController = require(_0x474602(0x19e)),
  authController = require(_0x474602(0x1a4)),
  router = express["Router"]();
router[_0x474602(0x1a2)]("/")[_0x474602(0x1ad)](
  propertyController[_0x474602(0x19f)]
),
  router[_0x474602(0x1a2)](_0x474602(0x1a5))[_0x474602(0x1ad)](
    propertyController["getProperty"]
  ),
  (module[_0x474602(0x1aa)] = router);
