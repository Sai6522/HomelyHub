function _0x3230(_0xd4e2e3, _0x52c656) {
  const _0xd06369 = _0xd063();
  return (
    (_0x3230 = function (_0x323066, _0x1d27d7) {
      _0x323066 = _0x323066 - 0xbb;
      let _0x482ce4 = _0xd06369[_0x323066];
      return _0x482ce4;
    }),
    _0x3230(_0xd4e2e3, _0x52c656)
  );
}
function _0xd063() {
  const _0x56196e = [
    "12jawTYJ",
    "12024BpZUjW",
    "10978209sTUCAo",
    "Error\x20searching\x20properties:",
    "488DnEave",
    "message",
    "48042yMMlRJ",
    "getUsersProperties",
    "1336605NlRUYx",
    "query",
    "_id",
    "6HDVhup",
    "status",
    "search",
    "find",
    "../utils/APIFeatures",
    "892423UwklZo",
    "json",
    "getProperties",
    "params",
    "length",
    "create",
    "427491bfvWzy",
    "findById",
    "getProperty",
    "5531550svrozl",
    "fail",
    "success",
    "paginate",
    "57OxuWlZ",
    "user",
    "createProperty",
  ];
  _0xd063 = function () {
    return _0x56196e;
  };
  return _0xd063();
}
const _0x28a802 = _0x3230;
(function (_0x4a6add, _0x3a8e2b) {
  const _0x24b40b = _0x3230,
    _0x4d3dc4 = _0x4a6add();
  while (!![]) {
    try {
      const _0x3e3e94 =
        (-parseInt(_0x24b40b(0xc3)) / 0x1) *
          (-parseInt(_0x24b40b(0xc7)) / 0x2) +
        (parseInt(_0x24b40b(0xbc)) / 0x3) * (-parseInt(_0x24b40b(0xc6)) / 0x4) +
        -parseInt(_0x24b40b(0xce)) / 0x5 +
        (-parseInt(_0x24b40b(0xd1)) / 0x6) * (parseInt(_0x24b40b(0xd6)) / 0x7) +
        (-parseInt(_0x24b40b(0xca)) / 0x8) *
          (-parseInt(_0x24b40b(0xcc)) / 0x9) +
        -parseInt(_0x24b40b(0xbf)) / 0xa +
        parseInt(_0x24b40b(0xc8)) / 0xb;
      if (_0x3e3e94 === _0x3a8e2b) break;
      else _0x4d3dc4["push"](_0x4d3dc4["shift"]());
    } catch (_0x45a314) {
      _0x4d3dc4["push"](_0x4d3dc4["shift"]());
    }
  }
})(_0xd063, 0x47031);
const Property = require("../Models/propertyModel"),
  APIFeatures = require(_0x28a802(0xd5));
(exports[_0x28a802(0xbe)] = async (_0x48f4b8, _0x528202) => {
  const _0x11f38c = _0x28a802;
  try {
    const _0x175af7 = await Property[_0x11f38c(0xbd)](
      _0x48f4b8[_0x11f38c(0xd9)]["id"]
    );
    _0x528202[_0x11f38c(0xd2)](0xc8)[_0x11f38c(0xd7)]({
      status: "success",
      data: _0x175af7,
    });
  } catch (_0x5e9c53) {
    _0x528202["status"](0x194)[_0x11f38c(0xd7)]({
      status: _0x11f38c(0xc0),
      message: _0x5e9c53[_0x11f38c(0xcb)],
    });
  }
}),
  (exports[_0x28a802(0xc5)] = async (_0x4e1cae, _0x1840b2) => {
    const _0x489176 = _0x28a802;
    try {
      const _0x8c03b1 = {
          ..._0x4e1cae["body"],
          userId: _0x4e1cae[_0x489176(0xc4)]["id"],
        },
        _0x25e02e = await Property[_0x489176(0xbb)](_0x8c03b1);
      _0x1840b2["status"](0xc8)[_0x489176(0xd7)]({
        status: _0x489176(0xc1),
        data: { data: _0x25e02e },
      });
    } catch (_0x26e36b) {
      _0x1840b2["status"](0x194)[_0x489176(0xd7)]({
        status: _0x489176(0xc0),
        message: _0x26e36b[_0x489176(0xcb)],
      });
    }
  }),
  (exports[_0x28a802(0xd8)] = async (_0x2403fa, _0x58d845) => {
    const _0x1be071 = _0x28a802;
    try {
      const _0x39836e = new APIFeatures(
          Property[_0x1be071(0xd4)](),
          _0x2403fa["query"]
        )
          ["filter"]()
          [_0x1be071(0xd3)]()
          [_0x1be071(0xc2)](),
        _0x1bf8af = await Property[_0x1be071(0xd4)](),
        _0x4c8b47 = await _0x39836e[_0x1be071(0xcf)];
      _0x58d845[_0x1be071(0xd2)](0xc8)[_0x1be071(0xd7)]({
        status: _0x1be071(0xc1),
        no_of_responses: _0x4c8b47["length"],
        all_Properties: _0x1bf8af["length"],
        data: _0x4c8b47,
      });
    } catch (_0x34daab) {
      console["error"](_0x1be071(0xc9), _0x34daab),
        _0x58d845[_0x1be071(0xd2)](0x1f4)[_0x1be071(0xd7)]({
          error: "Internal\x20server\x20error",
        });
    }
  }),
  (exports[_0x28a802(0xcd)] = async (_0x4d1389, _0x5a4bf6) => {
    const _0x424c78 = _0x28a802;
    try {
      const _0x5ef40b = _0x4d1389[_0x424c78(0xc4)][_0x424c78(0xd0)],
        _0x3c2395 = await Property[_0x424c78(0xd4)]({ userId: _0x5ef40b });
      _0x5a4bf6["status"](0xc8)[_0x424c78(0xd7)]({
        status: _0x424c78(0xc1),
        data_length: _0x3c2395[_0x424c78(0xda)],
        data: _0x3c2395,
      });
    } catch (_0x37745d) {
      _0x5a4bf6[_0x424c78(0xd2)](0x194)["json"]({
        status: _0x424c78(0xc0),
        message: _0x37745d["message"],
      });
    }
  });
