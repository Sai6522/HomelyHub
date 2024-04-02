const _0x4503ba = _0x4a4b;
function _0x5be0() {
  const _0x353338 = [
    "./app",
    "3981nmofgA",
    "988zjHjFE",
    "2opPTQH",
    "mongoose",
    "dotenv",
    "4122CPmrfr",
    "DATABASE_LOCAL",
    "2191790JzxujN",
    "77zkVjnK",
    "1017350aivTGa",
    "2611ymMNwQ",
    "2671855JFnFWA",
    "config",
    "150291PrRUeN",
    "connect",
    "env",
    "3363216fJpxJG",
    "then",
    "DB\x20connection\x20Succesfull",
    "log",
    "584lBPJPB",
    "listen",
  ];
  _0x5be0 = function () {
    return _0x353338;
  };
  return _0x5be0();
}
(function (_0x2b856d, _0x2c455a) {
  const _0x3ceb70 = _0x4a4b,
    _0x5cbdbb = _0x2b856d();
  while (!![]) {
    try {
      const _0x3f8340 =
        (parseInt(_0x3ceb70(0x1cd)) / 0x1) *
          (-parseInt(_0x3ceb70(0x1c6)) / 0x2) +
        (-parseInt(_0x3ceb70(0x1c4)) / 0x3) *
          (parseInt(_0x3ceb70(0x1c5)) / 0x4) +
        -parseInt(_0x3ceb70(0x1cf)) / 0x5 +
        (parseInt(_0x3ceb70(0x1c9)) / 0x6) *
          (parseInt(_0x3ceb70(0x1ce)) / 0x7) +
        (parseInt(_0x3ceb70(0x1c1)) / 0x8) *
          (parseInt(_0x3ceb70(0x1d1)) / 0x9) +
        (-parseInt(_0x3ceb70(0x1cb)) / 0xa) *
          (-parseInt(_0x3ceb70(0x1cc)) / 0xb) +
        -parseInt(_0x3ceb70(0x1bd)) / 0xc;
      if (_0x3f8340 === _0x2c455a) break;
      else _0x5cbdbb["push"](_0x5cbdbb["shift"]());
    } catch (_0x598a8b) {
      _0x5cbdbb["push"](_0x5cbdbb["shift"]());
    }
  }
})(_0x5be0, 0xcf76d);
const mongoose = require(_0x4503ba(0x1c7)),
  app = require(_0x4503ba(0x1c3)),
  dotenv = require(_0x4503ba(0x1c8));
dotenv[_0x4503ba(0x1d0)]({ path: "./config.env" });
let DB = process[_0x4503ba(0x1bc)][_0x4503ba(0x1ca)];
console[_0x4503ba(0x1c0)](DB),
  mongoose[_0x4503ba(0x1bb)](DB)[_0x4503ba(0x1be)](() => {
    const _0xa20632 = _0x4503ba;
    console["log"](_0xa20632(0x1bf));
  });
function _0x4a4b(_0x1092a2, _0x5694ea) {
  const _0x5be004 = _0x5be0();
  return (
    (_0x4a4b = function (_0x4a4b84, _0x5e2d7a) {
      _0x4a4b84 = _0x4a4b84 - 0x1bb;
      let _0x15f91e = _0x5be004[_0x4a4b84];
      return _0x15f91e;
    }),
    _0x4a4b(_0x1092a2, _0x5694ea)
  );
}
const port = process[_0x4503ba(0x1bc)]["PORT"];
app[_0x4503ba(0x1c2)](port, () => {
  const _0x4ad40b = _0x4503ba;
  console[_0x4ad40b(0x1c0)]("App\x20Running\x20on\x20port:\x20" + port);
});
