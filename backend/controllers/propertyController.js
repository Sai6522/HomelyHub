const _0x5ce2e6 = _0x1cb4;
(function (_0x5b1768, _0x1e2ed8) {
  const _0x1bc11b = _0x1cb4,
    _0x414c33 = _0x5b1768();
  while (!![]) {
    try {
      const _0x74cc71 =
        parseInt(_0x1bc11b(0x15f)) / 0x1 +
        -parseInt(_0x1bc11b(0x172)) / 0x2 +
        -parseInt(_0x1bc11b(0x165)) / 0x3 +
        -parseInt(_0x1bc11b(0x16f)) / 0x4 +
        (-parseInt(_0x1bc11b(0x160)) / 0x5) *
          (-parseInt(_0x1bc11b(0x162)) / 0x6) +
        (parseInt(_0x1bc11b(0x15d)) / 0x7) *
          (parseInt(_0x1bc11b(0x16c)) / 0x8) +
        (parseInt(_0x1bc11b(0x15a)) / 0x9) * (parseInt(_0x1bc11b(0x168)) / 0xa);
      if (_0x74cc71 === _0x1e2ed8) break;
      else _0x414c33["push"](_0x414c33["shift"]());
    } catch (_0x32dd09) {
      _0x414c33["push"](_0x414c33["shift"]());
    }
  }
})(_0x2b03, 0xc1bd7);
function _0x2b03() {
  const _0x18e7b3 = [
    "find",
    "818130kZKDNV",
    "1296985KFAfiG",
    "body",
    "6hiiUKN",
    "length",
    "getProperty",
    "3238980DtJBwM",
    "success",
    "findById",
    "430QUcRAX",
    "getProperties",
    "Error\x20searching\x20properties:",
    "status",
    "8FalfZD",
    "fail",
    "message",
    "2579044EYmkVY",
    "search",
    "filter",
    "3041814zuTinI",
    "query",
    "getUsersProperties",
    "Internal\x20server\x20error",
    "../Models/propertyModel",
    "createProperty",
    "error",
    "529479aJeIdb",
    "params",
    "json",
    "3021389pdRGNn",
  ];
  _0x2b03 = function () {
    return _0x18e7b3;
  };
  return _0x2b03();
}
function _0x1cb4(_0x326e9b, _0x5c2ac6) {
  const _0x2b035b = _0x2b03();
  return (
    (_0x1cb4 = function (_0x1cb46f, _0x43d31c) {
      _0x1cb46f = _0x1cb46f - 0x15a;
      let _0x3cf540 = _0x2b035b[_0x1cb46f];
      return _0x3cf540;
    }),
    _0x1cb4(_0x326e9b, _0x5c2ac6)
  );
}
const Property = require(_0x5ce2e6(0x176)),
  APIFeatures = require("../utils/APIFeatures");
(exports[_0x5ce2e6(0x164)] = async (_0xfc8bb2, _0x17b4cb) => {
  const _0x5959b5 = _0x5ce2e6;
  try {
    const _0xb1f66a = await Property[_0x5959b5(0x167)](
      _0xfc8bb2[_0x5959b5(0x15b)]["id"]
    );
    _0x17b4cb[_0x5959b5(0x16b)](0xc8)[_0x5959b5(0x15c)]({
      status: _0x5959b5(0x166),
      data: _0xb1f66a,
    });
  } catch (_0x440954) {
    _0x17b4cb[_0x5959b5(0x16b)](0x194)[_0x5959b5(0x15c)]({
      status: _0x5959b5(0x16d),
      message: _0x440954[_0x5959b5(0x16e)],
    });
  }
}),
  (exports[_0x5ce2e6(0x177)] = async (_0xbc5286, _0x813f93) => {
    const _0x21546b = _0x5ce2e6;
    try {
      const _0x57dd9f = {
          ..._0xbc5286[_0x21546b(0x161)],
          userId: _0xbc5286["user"]["id"],
        },
        _0xdc8573 = await Property["create"](_0x57dd9f);
      _0x813f93[_0x21546b(0x16b)](0xc8)[_0x21546b(0x15c)]({
        status: _0x21546b(0x166),
        data: { data: _0xdc8573 },
      });
    } catch (_0x3d1656) {
      _0x813f93[_0x21546b(0x16b)](0x194)["json"]({
        status: _0x21546b(0x16d),
        message: _0x3d1656[_0x21546b(0x16e)],
      });
    }
  }),
  (exports[_0x5ce2e6(0x169)] = async (_0x21b54d, _0x2ee9a6) => {
    const _0x3ace7d = _0x5ce2e6;
    try {
      const _0x3d24ab = new APIFeatures(
          Property["find"](),
          _0x21b54d[_0x3ace7d(0x173)]
        )
          [_0x3ace7d(0x171)]()
          [_0x3ace7d(0x170)]()
          ["paginate"](),
        _0x12c370 = await Property[_0x3ace7d(0x15e)](),
        _0x4372e7 = await _0x3d24ab[_0x3ace7d(0x173)];
      _0x2ee9a6[_0x3ace7d(0x16b)](0xc8)[_0x3ace7d(0x15c)]({
        status: _0x3ace7d(0x166),
        no_of_responses: _0x4372e7[_0x3ace7d(0x163)],
        all_Properties: _0x12c370["length"],
        data: _0x4372e7,
      });
    } catch (_0x234bcd) {
      console[_0x3ace7d(0x178)](_0x3ace7d(0x16a), _0x234bcd),
        _0x2ee9a6[_0x3ace7d(0x16b)](0x1f4)["json"]({ error: _0x3ace7d(0x175) });
    }
  }),
  (exports[_0x5ce2e6(0x174)] = async (_0x827470, _0x5dcead) => {
    const _0x5d9884 = _0x5ce2e6;
    try {
      const _0x219aa9 = _0x827470["user"]["_id"],
        _0x4917ff = await Property[_0x5d9884(0x15e)]({ userId: _0x219aa9 });
      _0x5dcead[_0x5d9884(0x16b)](0xc8)[_0x5d9884(0x15c)]({
        status: _0x5d9884(0x166),
        data_length: _0x4917ff[_0x5d9884(0x163)],
        data: _0x4917ff,
      });
    } catch (_0x4618c7) {
      _0x5dcead[_0x5d9884(0x16b)](0x194)[_0x5d9884(0x15c)]({
        status: _0x5d9884(0x16d),
        message: _0x4618c7[_0x5d9884(0x16e)],
      });
    }
  });
