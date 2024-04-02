const _0x30fa17 = _0x2fdd;
(function (_0x2971a0, _0x483aa6) {
  const _0x3b7b54 = _0x2fdd,
    _0x843c2e = _0x2971a0();
  while (!![]) {
    try {
      const _0x51fd63 =
        -parseInt(_0x3b7b54(0xd5)) / 0x1 +
        (parseInt(_0x3b7b54(0xd6)) / 0x2) * (-parseInt(_0x3b7b54(0xd9)) / 0x3) +
        parseInt(_0x3b7b54(0xc8)) / 0x4 +
        (parseInt(_0x3b7b54(0xcb)) / 0x5) * (-parseInt(_0x3b7b54(0xd2)) / 0x6) +
        (-parseInt(_0x3b7b54(0xdb)) / 0x7) * (parseInt(_0x3b7b54(0xdc)) / 0x8) +
        parseInt(_0x3b7b54(0xd0)) / 0x9 +
        (parseInt(_0x3b7b54(0xd1)) / 0xa) * (parseInt(_0x3b7b54(0xd7)) / 0xb);
      if (_0x51fd63 === _0x483aa6) break;
      else _0x843c2e["push"](_0x843c2e["shift"]());
    } catch (_0x2c6cd7) {
      _0x843c2e["push"](_0x843c2e["shift"]());
    }
  }
})(_0x251f, 0x534cf);
const mongoose = require(_0x30fa17(0xd3)),
  app = require(_0x30fa17(0xd8)),
  dotenv = require(_0x30fa17(0xc9));
dotenv["config"]({ path: _0x30fa17(0xd4) });
let DB = process["env"][_0x30fa17(0xda)];
console[_0x30fa17(0xca)](DB),
  mongoose["connect"](DB)[_0x30fa17(0xce)](() => {
    const _0x50fe72 = _0x30fa17;
    console[_0x50fe72(0xca)](_0x50fe72(0xcc));
  });
const port = process["env"][_0x30fa17(0xcf)];
function _0x2fdd(_0x4c6fda, _0x70619e) {
  const _0x251f1f = _0x251f();
  return (
    (_0x2fdd = function (_0x2fddf4, _0x1b758b) {
      _0x2fddf4 = _0x2fddf4 - 0xc7;
      let _0x54eb03 = _0x251f1f[_0x2fddf4];
      return _0x54eb03;
    }),
    _0x2fdd(_0x4c6fda, _0x70619e)
  );
}
function _0x251f() {
  const _0x560693 = [
    "612492wTGuuz",
    "mongoose",
    "./config.env",
    "645055QfyGrw",
    "57690xDUcPc",
    "66WBuXRM",
    "./app",
    "66rvDqdx",
    "DATABASE",
    "146188ZlEJBW",
    "56oIWHXX",
    "listen",
    "2071020QaLzcb",
    "dotenv",
    "log",
    "5jPNPRz",
    "DB\x20connection\x20Succesfull",
    "App\x20Running\x20on\x20port:\x20",
    "then",
    "PORT",
    "5145525IQOgSV",
    "1299390wWprek",
  ];
  _0x251f = function () {
    return _0x560693;
  };
  return _0x251f();
}
app[_0x30fa17(0xc7)](port, () => {
  const _0x32f832 = _0x30fa17;
  console[_0x32f832(0xca)](_0x32f832(0xcd) + port);
});
