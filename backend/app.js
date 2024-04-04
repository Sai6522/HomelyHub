const _0x99eaea = _0x2b3e;
function _0x4860() {
  const _0x2495a0 = [
    "184161uNMuCc",
    "static",
    "96792bstRAM",
    "get",
    "19835nznGAn",
    "9RCclSr",
    "./config.env",
    "/api/v1/rent/user",
    "exports",
    "cors",
    "sendFile",
    "302163INzFfB",
    "express",
    "1463100GNBgEV",
    "dotenv",
    "6163384mlmjFi",
    "config",
    "path",
    "84xmZwKJ",
    "1711731mqixCA",
    "./routes/userRoutes",
    "/api/v1/rent/listing",
    "use",
    "resolve",
    "cookie-parser",
    "../frontend/build/index.html",
  ];
  _0x4860 = function () {
    return _0x2495a0;
  };
  return _0x4860();
}
(function (_0x478b4f, _0x49370d) {
  const _0x18deb4 = _0x2b3e,
    _0xef8d4 = _0x478b4f();
  while (!![]) {
    try {
      const _0x3037b3 =
        parseInt(_0x18deb4(0x1cc)) / 0x1 +
        parseInt(_0x18deb4(0x1ce)) / 0x2 +
        parseInt(_0x18deb4(0x1bd)) / 0x3 +
        (parseInt(_0x18deb4(0x1c4)) / 0x4) *
          (parseInt(_0x18deb4(0x1d0)) / 0x5) +
        parseInt(_0x18deb4(0x1bf)) / 0x6 +
        parseInt(_0x18deb4(0x1c5)) / 0x7 +
        (-parseInt(_0x18deb4(0x1c1)) / 0x8) *
          (parseInt(_0x18deb4(0x1d1)) / 0x9);
      if (_0x3037b3 === _0x49370d) break;
      else _0xef8d4["push"](_0xef8d4["shift"]());
    } catch (_0x421600) {
      _0xef8d4["push"](_0xef8d4["shift"]());
    }
  }
})(_0x4860, 0x20d91);
const express = require(_0x99eaea(0x1be)),
  propertyRoutes = require("./routes/propertyRoutes"),
  userRoutes = require(_0x99eaea(0x1c6)),
  cookieParser = require(_0x99eaea(0x1ca)),
  cors = require(_0x99eaea(0x1bb)),
  path = require(_0x99eaea(0x1c3)),
  dotenv = require(_0x99eaea(0x1c0));
dotenv[_0x99eaea(0x1c2)]({ path: _0x99eaea(0x1d2) });
function _0x2b3e(_0x35a14e, _0x36ecb5) {
  const _0x48605f = _0x4860();
  return (
    (_0x2b3e = function (_0x2b3e0b, _0x34c3fe) {
      _0x2b3e0b = _0x2b3e0b - 0x1b9;
      let _0x14c609 = _0x48605f[_0x2b3e0b];
      return _0x14c609;
    }),
    _0x2b3e(_0x35a14e, _0x36ecb5)
  );
}
const app = express();
app["use"](express["json"]()),
  app[_0x99eaea(0x1c8)](cookieParser()),
  app["use"](cors()),
  app[_0x99eaea(0x1c8)](_0x99eaea(0x1c7), propertyRoutes),
  app[_0x99eaea(0x1c8)](_0x99eaea(0x1b9), userRoutes),
  app[_0x99eaea(0x1c8)](
    express[_0x99eaea(0x1cd)](path["join"](__dirname, "../frontend/build"))
  ),
  app[_0x99eaea(0x1cf)]("*", (_0x416fd7, _0x555edd) => {
    const _0x201825 = _0x99eaea;
    _0x555edd[_0x201825(0x1bc)](
      path[_0x201825(0x1c9)](__dirname, _0x201825(0x1cb))
    );
  }),
  (module[_0x99eaea(0x1ba)] = app);
