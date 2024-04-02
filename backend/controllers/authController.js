const _0x2ca5db = _0x5307;
(function (_0x199749, _0x309959) {
  const _0x1ecc17 = _0x5307,
    _0x41d337 = _0x199749();
  while (!![]) {
    try {
      const _0x270403 =
        -parseInt(_0x1ecc17(0x1c7)) / 0x1 +
        (parseInt(_0x1ecc17(0x1b5)) / 0x2) *
          (parseInt(_0x1ecc17(0x1b9)) / 0x3) +
        parseInt(_0x1ecc17(0x198)) / 0x4 +
        (-parseInt(_0x1ecc17(0x17b)) / 0x5) *
          (parseInt(_0x1ecc17(0x1b4)) / 0x6) +
        -parseInt(_0x1ecc17(0x196)) / 0x7 +
        -parseInt(_0x1ecc17(0x19f)) / 0x8 +
        (-parseInt(_0x1ecc17(0x18b)) / 0x9) *
          (-parseInt(_0x1ecc17(0x18d)) / 0xa);
      if (_0x270403 === _0x309959) break;
      else _0x41d337["push"](_0x41d337["shift"]());
    } catch (_0x52ac2b) {
      _0x41d337["push"](_0x41d337["shift"]());
    }
  }
})(_0x464d, 0x99152);
const User = require(_0x2ca5db(0x187)),
  jwt = require("jsonwebtoken"),
  path = require(_0x2ca5db(0x17f)),
  dotenv = require(_0x2ca5db(0x190))[_0x2ca5db(0x183)]({
    path: path[_0x2ca5db(0x1b7)](__dirname, _0x2ca5db(0x17d)),
  }),
  { promisify } = require(_0x2ca5db(0x1a0)),
  sendEmail = require("../utils/Email"),
  crypto = require(_0x2ca5db(0x176)),
  cloudinary = require(_0x2ca5db(0x179)),
  signToken = (_0x9606c8) => {
    const _0xe23014 = _0x2ca5db;
    return jwt[_0xe23014(0x1ba)](
      { id: _0x9606c8 },
      process[_0xe23014(0x1ae)][_0xe23014(0x172)],
      { expiresIn: process[_0xe23014(0x1ae)][_0xe23014(0x178)] }
    );
  },
  createSendToken = (_0x27e016, _0x5cd747, _0x3cf25d) => {
    const _0x54a562 = _0x2ca5db,
      _0x5369f3 = signToken(_0x27e016["_id"]),
      _0x4f2532 = {
        expires: new Date(
          Date[_0x54a562(0x18f)]() +
            process["env"][_0x54a562(0x1a1)] * 0x18 * 0x3c * 0x3c * 0x3e8
        ),
        httpOnly: !![],
        secure: process["env"][_0x54a562(0x193)] === "production" ? !![] : null,
      };
    _0x3cf25d[_0x54a562(0x17a)](_0x54a562(0x1bd), _0x5369f3, _0x4f2532),
      (_0x27e016[_0x54a562(0x1a6)] = undefined),
      _0x3cf25d[_0x54a562(0x199)](_0x5cd747)[_0x54a562(0x19e)]({
        status: _0x54a562(0x180),
        token: _0x5369f3,
        user: _0x27e016,
      });
  },
  filterObj = (_0x3ecdde, ..._0x4ff875) => {
    const _0x35dd41 = _0x2ca5db;
    let _0x330f0b = {};
    return (
      Object[_0x35dd41(0x191)](_0x3ecdde)["forEach"]((_0x83ef07) => {
        if (_0x4ff875["includes"](_0x83ef07))
          _0x330f0b[_0x83ef07] = _0x3ecdde[_0x83ef07];
      }),
      _0x330f0b
    );
  },
  defaultAvatarUrl = _0x2ca5db(0x1a4);
function _0x464d() {
  const _0x50f1a0 = [
    "Login\x20in\x20unsuccessfull",
    "loggedout",
    "updatePassword",
    "Token\x20send\x20to\x20email",
    "passwordResetToken",
    "host",
    "hex",
    "body",
    "public_id",
    "findById",
    "JWT_SECRET",
    "headers",
    "://",
    "name",
    "crypto",
    "update",
    "JWT_EXPIRES_IN",
    "../utils/Cloudinary",
    "cookie",
    "1947235xPooFO",
    "the\x20user\x20belonging\x20to\x20the\x20token\x20doesn\x27t\x20exsists",
    "../config.env",
    "message",
    "path",
    "success",
    "resetPassword",
    "Please\x20provide\x20email\x20and\x20password",
    "config",
    "You\x20are\x20not\x20Logged!!\x20Please\x20log\x20in\x20to\x20get\x20access",
    "logout",
    "findOne",
    "../Models/userModel",
    "log",
    "avatar",
    "save",
    "846eyZFCH",
    "Your\x20password\x20reset\x20token\x20valid\x20for\x2010\x20mins",
    "105610YECQyY",
    "login",
    "now",
    "dotenv",
    "keys",
    "signup",
    "NODE_ENV",
    "Fail",
    "findByIdAndUpdate",
    "1396171MxCsUX",
    "upload",
    "4233280UztMXG",
    "status",
    "split",
    "fail",
    "passwordResetExpires",
    "select",
    "json",
    "1166072hBGXKp",
    "util",
    "JWT_COOKIE_EXPIRES_IN",
    "production",
    "protect",
    "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg",
    "cookies",
    "password",
    "get",
    "verify",
    "FRONTEND_URL",
    "\x22\x20style=\x22\x20display:\x20inline-block;\x20margin:10px;\x20padding:10px;\x20background-color:\x20rgb(65,\x2060,\x2060,\x200.5);\x20border-radius:5px;\x20text-decoration:none;\x20color:white;\x20font-size:20px\x22>Reset\x20Password.</a><p>",
    "createHash",
    "iat",
    "passwordConfirm",
    "env",
    "Bearer",
    "changedPasswordAfter",
    "avatars",
    "startsWith",
    "sha256",
    "18BzvLPu",
    "17716kZFcSB",
    "+password",
    "join",
    "passwordCurrent",
    "174XCSmvh",
    "sign",
    "Succes",
    "createPasswordResetToken",
    "jwt",
    "authorization",
    "correctPassword",
    "/user/resetPassword/",
    "protocol",
    "phoneNumber",
    "Incorect\x20email\x20or\x20password",
    "email",
    "Token\x20is\x20invalid\x20or\x20Expired!!",
    "isLoggedIn",
    "424239moNjWj",
    "user",
  ];
  _0x464d = function () {
    return _0x50f1a0;
  };
  return _0x464d();
}
function _0x5307(_0xffa406, _0x4743ba) {
  const _0x464d5a = _0x464d();
  return (
    (_0x5307 = function (_0x53079b, _0x1494a8) {
      _0x53079b = _0x53079b - 0x168;
      let _0x3cacb4 = _0x464d5a[_0x53079b];
      return _0x3cacb4;
    }),
    _0x5307(_0xffa406, _0x4743ba)
  );
}
(exports[_0x2ca5db(0x192)] = async (_0x2514b9, _0x34b533) => {
  const _0x110af0 = _0x2ca5db;
  try {
    const _0x47afc4 = await User["create"]({
      name: _0x2514b9["body"][_0x110af0(0x175)],
      email: _0x2514b9["body"]["email"],
      phoneNumber: _0x2514b9[_0x110af0(0x16f)]["phoneNumber"],
      password: _0x2514b9[_0x110af0(0x16f)]["password"],
      passwordConfirm: _0x2514b9[_0x110af0(0x16f)][_0x110af0(0x1ad)],
      avatar: { url: _0x2514b9["body"]["avatar"] || defaultAvatarUrl },
    });
    createSendToken(_0x47afc4, 0xc9, _0x34b533);
  } catch (_0x134967) {
    _0x34b533["status"](0x190)[_0x110af0(0x19e)]({
      message: _0x134967[_0x110af0(0x17e)],
    });
  }
}),
  (exports[_0x2ca5db(0x18e)] = async (_0x1b19b4, _0x52dc37) => {
    const _0x3f2d69 = _0x2ca5db;
    try {
      const { email: _0x548534, password: _0x110f20 } =
        _0x1b19b4[_0x3f2d69(0x16f)];
      if (!_0x548534 || !_0x110f20) throw new Error(_0x3f2d69(0x182));
      const _0x21d1ed = await User["findOne"]({ email: _0x548534 })[
        _0x3f2d69(0x19d)
      ](_0x3f2d69(0x1b6));
      if (
        !_0x21d1ed ||
        !(await _0x21d1ed[_0x3f2d69(0x1bf)](_0x110f20, _0x21d1ed["password"]))
      )
        throw new Error(_0x3f2d69(0x1c3));
      createSendToken(_0x21d1ed, 0xc8, _0x52dc37);
    } catch (_0x14ac3d) {
      _0x52dc37[_0x3f2d69(0x199)](0x190)[_0x3f2d69(0x19e)]({
        message: _0x3f2d69(0x168),
      });
    }
  }),
  (exports[_0x2ca5db(0x185)] = (_0x3f8977, _0x1ca379) => {
    const _0x34db37 = _0x2ca5db;
    _0x1ca379["cookie"](_0x34db37(0x1bd), "loggedout", {
      expires: new Date(Date[_0x34db37(0x18f)]() + 0xa * 0x64),
      httpOnly: !![],
    }),
      _0x1ca379[_0x34db37(0x199)](0xc8)[_0x34db37(0x19e)]({
        status: "success",
      });
  }),
  (exports[_0x2ca5db(0x1a3)] = async (_0x1847eb, _0x49b46f, _0x27ba28) => {
    const _0x1e12e8 = _0x2ca5db;
    try {
      let _0x591fd0;
      if (
        _0x1847eb[_0x1e12e8(0x173)][_0x1e12e8(0x1be)] &&
        _0x1847eb[_0x1e12e8(0x173)][_0x1e12e8(0x1be)][_0x1e12e8(0x1b2)](
          _0x1e12e8(0x1af)
        )
      )
        _0x591fd0 =
          _0x1847eb[_0x1e12e8(0x173)]["authorization"][_0x1e12e8(0x19a)](
            "\x20"
          )[0x1];
      else
        _0x1847eb[_0x1e12e8(0x1a5)]["jwt"] &&
          _0x1847eb["cookies"][_0x1e12e8(0x1bd)] !== _0x1e12e8(0x169) &&
          (_0x591fd0 = _0x1847eb[_0x1e12e8(0x1a5)][_0x1e12e8(0x1bd)]);
      if (!_0x591fd0) throw new Error(_0x1e12e8(0x184));
      const _0xcea478 = await promisify(jwt[_0x1e12e8(0x1a8)])(
          _0x591fd0,
          process[_0x1e12e8(0x1ae)][_0x1e12e8(0x172)]
        ),
        _0xda4999 = await User["findById"](_0xcea478["id"]);
      if (!_0xda4999) throw new Error(_0x1e12e8(0x17c));
      if (_0xda4999[_0x1e12e8(0x1b0)](_0xcea478[_0x1e12e8(0x1ac)]))
        throw new Error(
          "User\x20recently\x20cahnged\x20the\x20password,\x20Please\x20login\x20again"
        );
      (_0x1847eb[_0x1e12e8(0x1c8)] = _0xda4999), _0x27ba28();
    } catch (_0x38c22a) {
      _0x49b46f[_0x1e12e8(0x199)](0x191)[_0x1e12e8(0x19e)]({
        status: _0x1e12e8(0x19b),
        message: _0x38c22a[_0x1e12e8(0x17e)],
      });
    }
  }),
  (exports["updateMe"] = async (_0x1474a9, _0x78f6d9, _0x454893) => {
    const _0x3368c1 = _0x2ca5db;
    try {
      const _0x1d1913 = filterObj(
        _0x1474a9[_0x3368c1(0x16f)],
        _0x3368c1(0x175),
        _0x3368c1(0x1c2),
        "avatar"
      );
      console[_0x3368c1(0x188)](_0x1d1913),
        console[_0x3368c1(0x188)](
          _0x1474a9[_0x3368c1(0x16f)][_0x3368c1(0x189)]
        );
      if (_0x1474a9["body"][_0x3368c1(0x189)] !== undefined) {
        const _0x595439 = await cloudinary["uploader"][_0x3368c1(0x197)](
          _0x1474a9[_0x3368c1(0x16f)][_0x3368c1(0x189)],
          {
            folder: _0x3368c1(0x1b1),
            width: 0x96,
            height: 0x96,
            crop: "scale",
            responsive_breakpoints: {
              create_derived: !![],
              bytes_step: 0x4e20,
              min_width: 0xc8,
              max_width: 0xc8,
            },
          }
        );
        _0x1d1913[_0x3368c1(0x189)] = {
          public_id: _0x595439[_0x3368c1(0x170)],
          url: _0x595439["secure_url"],
        };
      }
      const _0xc50e24 = await User[_0x3368c1(0x195)](
        _0x1474a9[_0x3368c1(0x1c8)]["id"],
        _0x1d1913,
        { new: !![], runValidators: !![], useFindAndModify: ![] }
      );
      _0x78f6d9[_0x3368c1(0x199)](0xc8)[_0x3368c1(0x19e)]({
        status: _0x3368c1(0x1bb),
        data: { user: _0xc50e24 },
      });
    } catch (_0x2f82bb) {
      _0x78f6d9[_0x3368c1(0x199)](0x191)[_0x3368c1(0x19e)]({
        status: _0x3368c1(0x194),
        message: _0x2f82bb["message"],
      });
    }
  }),
  (exports[_0x2ca5db(0x16a)] = async (_0x1e9e5f, _0x36d1fa, _0x16b83a) => {
    const _0x4e9204 = _0x2ca5db;
    try {
      const _0x1468a6 = await User[_0x4e9204(0x171)](_0x1e9e5f["user"]["id"])[
        _0x4e9204(0x19d)
      ](_0x4e9204(0x1b6));
      if (
        !(await _0x1468a6["correctPassword"](
          _0x1e9e5f[_0x4e9204(0x16f)][_0x4e9204(0x1b8)],
          _0x1468a6[_0x4e9204(0x1a6)]
        ))
      )
        throw new Error("Your\x20current\x20password\x20is\x20wrong");
      (_0x1468a6["password"] = _0x1e9e5f["body"][_0x4e9204(0x1a6)]),
        (_0x1468a6[_0x4e9204(0x1ad)] =
          _0x1e9e5f[_0x4e9204(0x16f)][_0x4e9204(0x1ad)]),
        await _0x1468a6[_0x4e9204(0x18a)](),
        createSendToken(_0x1468a6, 0xc8, _0x36d1fa);
    } catch (_0x27d958) {
      _0x36d1fa["status"](0x194)["json"]({
        status: _0x4e9204(0x19b),
        message: _0x27d958["message"],
      });
    }
  }),
  (exports["forgotPassword"] = async (_0x2c21fe, _0xae3f65, _0x2eda9c) => {
    const _0x479cb8 = _0x2ca5db,
      _0x226ab7 = await User[_0x479cb8(0x186)]({
        email: _0x2c21fe[_0x479cb8(0x16f)][_0x479cb8(0x1c4)],
      });
    !_0x226ab7 &&
      _0xae3f65[_0x479cb8(0x199)](0x190)[_0x479cb8(0x19e)]({
        error: "There\x20is\x20no\x20user\x20with\x20this\x20email",
      });
    const _0x52510f = _0x226ab7[_0x479cb8(0x1bc)]();
    await _0x226ab7["save"]({ validateBeforeSave: ![] });
    let _0x22b899 = process["env"][_0x479cb8(0x1a9)];
    process[_0x479cb8(0x1ae)][_0x479cb8(0x193)] === _0x479cb8(0x1a2) &&
      (_0x22b899 =
        _0x2c21fe[_0x479cb8(0x1c1)] +
        _0x479cb8(0x174) +
        _0x2c21fe[_0x479cb8(0x1a7)](_0x479cb8(0x16d)));
    const _0x5979a1 = _0x22b899 + _0x479cb8(0x1c0) + _0x52510f,
      _0x4b24fa =
        "<p>Forgot\x20your\x20password?\x20Submit\x20a\x20PATCH\x20request\x20with\x20your\x20new\x20password\x20and\x20passwordConfirm.\x20Click\x20the\x20button\x20to\x20resetpassword\x20page.:\x20<a\x20href=\x22" +
        _0x5979a1 +
        _0x479cb8(0x1aa);
    try {
      await sendEmail({
        email: _0x226ab7[_0x479cb8(0x1c4)],
        subject: _0x479cb8(0x18c),
        message: _0x4b24fa,
      }),
        _0xae3f65[_0x479cb8(0x199)](0xc8)["json"]({
          status: _0x479cb8(0x180),
          message: _0x479cb8(0x16b),
        });
    } catch (_0x526257) {
      return (
        (_0x226ab7[_0x479cb8(0x16c)] = undefined),
        (_0x226ab7[_0x479cb8(0x19c)] = undefined),
        await _0x226ab7["save"]({ validateBeforeSave: ![] }),
        _0xae3f65[_0x479cb8(0x199)](0x190)[_0x479cb8(0x19e)]({
          error: _0x526257[_0x479cb8(0x17e)],
        }),
        _0x2eda9c()
      );
    }
  }),
  (exports[_0x2ca5db(0x181)] = async (_0x419cc1, _0x175058, _0x3ca131) => {
    const _0x4f66f8 = _0x2ca5db;
    try {
      const _0x555e26 = crypto[_0x4f66f8(0x1ab)](_0x4f66f8(0x1b3))
          [_0x4f66f8(0x177)](_0x419cc1["params"]["token"])
          ["digest"](_0x4f66f8(0x16e)),
        _0x6c9df7 = await User[_0x4f66f8(0x186)]({
          passwordResetToken: _0x555e26,
          passwordResetExpires: { $gt: Date[_0x4f66f8(0x18f)]() },
        });
      if (!_0x6c9df7) throw new Error(_0x4f66f8(0x1c5));
      (_0x6c9df7[_0x4f66f8(0x1a6)] = _0x419cc1["body"][_0x4f66f8(0x1a6)]),
        (_0x6c9df7["passwordConfirm"] = _0x419cc1["body"][_0x4f66f8(0x1ad)]),
        (_0x6c9df7["passwordResetToken"] = undefined),
        (_0x6c9df7[_0x4f66f8(0x19c)] = undefined),
        await _0x6c9df7[_0x4f66f8(0x18a)]();
    } catch (_0x5913d8) {
      return (
        _0x175058["status"](0x190)[_0x4f66f8(0x19e)]({
          status: _0x4f66f8(0x19b),
          error: _0x5913d8[_0x4f66f8(0x17e)],
        }),
        _0x3ca131()
      );
    }
  }),
  (exports[_0x2ca5db(0x1c6)] = async (_0x3e9f8b, _0x56a6df, _0x379734) => {
    const _0x28bcf9 = _0x2ca5db;
    try {
      if (_0x3e9f8b[_0x28bcf9(0x1a5)][_0x28bcf9(0x1bd)]) {
        const _0x13322e = await promisify(jwt["verify"])(
            _0x3e9f8b[_0x28bcf9(0x1a5)][_0x28bcf9(0x1bd)],
            process[_0x28bcf9(0x1ae)][_0x28bcf9(0x172)]
          ),
          _0xa9df16 = await User[_0x28bcf9(0x171)](_0x13322e["id"]);
        if (!_0xa9df16) return _0x379734();
        if (_0xa9df16[_0x28bcf9(0x1b0)](_0x13322e[_0x28bcf9(0x1ac)]))
          return _0x379734();
        return (
          _0x56a6df[_0x28bcf9(0x199)](0xc8)[_0x28bcf9(0x19e)]({
            status: _0x28bcf9(0x180),
            user: _0xa9df16,
          }),
          _0x379734()
        );
      }
    } catch (_0x31e2ed) {
      return _0x379734();
    }
    _0x379734();
  });
