const _0x5829d0 = _0xb621;
(function (_0x2bdc01, _0x5d328d) {
  const _0x506821 = _0xb621,
    _0xc961d9 = _0x2bdc01();
  while (!![]) {
    try {
      const _0x123c79 =
        parseInt(_0x506821(0x1d1)) / 0x1 +
        (-parseInt(_0x506821(0x18f)) / 0x2) *
          (-parseInt(_0x506821(0x188)) / 0x3) +
        -parseInt(_0x506821(0x18c)) / 0x4 +
        parseInt(_0x506821(0x19f)) / 0x5 +
        (parseInt(_0x506821(0x1ac)) / 0x6) *
          (-parseInt(_0x506821(0x1cb)) / 0x7) +
        (parseInt(_0x506821(0x1b0)) / 0x8) *
          (parseInt(_0x506821(0x1c8)) / 0x9) +
        -parseInt(_0x506821(0x19e)) / 0xa;
      if (_0x123c79 === _0x5d328d) break;
      else _0xc961d9["push"](_0xc961d9["shift"]());
    } catch (_0x47950e) {
      _0xc961d9["push"](_0xc961d9["shift"]());
    }
  }
})(_0x45c9, 0xb2891);
const User = require(_0x5829d0(0x1af)),
  jwt = require("jsonwebtoken"),
  path = require(_0x5829d0(0x19b)),
  dotenv = require(_0x5829d0(0x1d3))[_0x5829d0(0x18d)]({
    path: path["join"](__dirname, _0x5829d0(0x1b7)),
  }),
  { promisify } = require(_0x5829d0(0x1c7)),
  sendEmail = require(_0x5829d0(0x1b9)),
  crypto = require("crypto"),
  cloudinary = require(_0x5829d0(0x181)),
  signToken = (_0x2b374a) => {
    const _0x51d4bd = _0x5829d0;
    return jwt[_0x51d4bd(0x17e)](
      { id: _0x2b374a },
      process[_0x51d4bd(0x1ba)][_0x51d4bd(0x1cf)],
      { expiresIn: process[_0x51d4bd(0x1ba)][_0x51d4bd(0x1aa)] }
    );
  },
  createSendToken = (_0x514bec, _0x5e8c7e, _0x37709) => {
    const _0x3ab200 = _0x5829d0,
      _0x499b74 = signToken(_0x514bec[_0x3ab200(0x1d0)]),
      _0x2f43f5 = {
        expires: new Date(
          Date[_0x3ab200(0x1ad)]() +
            process[_0x3ab200(0x1ba)][_0x3ab200(0x19c)] *
              0x18 *
              0x3c *
              0x3c *
              0x3e8
        ),
        secure: !![],
        httpOnly: !![],
      };
    _0x37709[_0x3ab200(0x18a)](_0x3ab200(0x1bd), _0x499b74, _0x2f43f5),
      (_0x514bec["password"] = undefined),
      _0x37709["status"](_0x5e8c7e)["json"]({
        status: _0x3ab200(0x1a3),
        token: _0x499b74,
        user: _0x514bec,
      });
  },
  filterObj = (_0x50520c, ..._0xafc862) => {
    const _0x4c45c0 = _0x5829d0;
    let _0x4290ba = {};
    return (
      Object[_0x4c45c0(0x1c4)](_0x50520c)[_0x4c45c0(0x1a5)]((_0x4ddb20) => {
        if (_0xafc862["includes"](_0x4ddb20))
          _0x4290ba[_0x4ddb20] = _0x50520c[_0x4ddb20];
      }),
      _0x4290ba
    );
  },
  defaultAvatarUrl = _0x5829d0(0x193);
function _0xb621(_0x504a42, _0x44af3c) {
  const _0x45c936 = _0x45c9();
  return (
    (_0xb621 = function (_0xb621e5, _0x3b6b8f) {
      _0xb621e5 = _0xb621e5 - 0x17a;
      let _0x404c6a = _0x45c936[_0xb621e5];
      return _0x404c6a;
    }),
    _0xb621(_0x504a42, _0x44af3c)
  );
}
(exports["signup"] = async (_0x276f3f, _0x3cb397) => {
  const _0x40f94e = _0x5829d0;
  try {
    const _0x2917f5 = await User["create"]({
      name: _0x276f3f[_0x40f94e(0x1c0)]["name"],
      email: _0x276f3f[_0x40f94e(0x1c0)]["email"],
      phoneNumber: _0x276f3f[_0x40f94e(0x1c0)][_0x40f94e(0x185)],
      password: _0x276f3f[_0x40f94e(0x1c0)][_0x40f94e(0x180)],
      passwordConfirm: _0x276f3f[_0x40f94e(0x1c0)][_0x40f94e(0x1a7)],
      avatar: {
        url: _0x276f3f[_0x40f94e(0x1c0)][_0x40f94e(0x183)] || defaultAvatarUrl,
      },
    });
    createSendToken(_0x2917f5, 0xc9, _0x3cb397);
  } catch (_0x1bca14) {
    _0x3cb397[_0x40f94e(0x1ab)](0x190)["json"]({
      message: _0x1bca14["message"],
    });
  }
}),
  (exports[_0x5829d0(0x1c1)] = async (_0x40b4d8, _0x5d49d9) => {
    const _0x171b97 = _0x5829d0;
    try {
      const { email: _0x234748, password: _0x25b696 } = _0x40b4d8["body"];
      if (!_0x234748 || !_0x25b696) throw new Error(_0x171b97(0x17f));
      const _0x4cd25d = await User[_0x171b97(0x17d)]({ email: _0x234748 })[
        _0x171b97(0x1ca)
      ]("+password");
      if (
        !_0x4cd25d ||
        !(await _0x4cd25d[_0x171b97(0x1b2)](
          _0x25b696,
          _0x4cd25d[_0x171b97(0x180)]
        ))
      )
        throw new Error(_0x171b97(0x1bc));
      createSendToken(_0x4cd25d, 0xc8, _0x5d49d9);
    } catch (_0x568110) {
      _0x5d49d9["status"](0x190)[_0x171b97(0x1a4)]({
        message: "Login\x20in\x20unsuccessfull",
      });
    }
  }),
  (exports["logout"] = (_0x59bc87, _0xbcffca) => {
    const _0x25e67f = _0x5829d0;
    _0xbcffca[_0x25e67f(0x18a)](_0x25e67f(0x1bd), _0x25e67f(0x1be), {
      expires: new Date(Date[_0x25e67f(0x1ad)]() + 0xa * 0x64),
      httpOnly: !![],
    }),
      _0xbcffca[_0x25e67f(0x1ab)](0xc8)[_0x25e67f(0x1a4)]({
        status: _0x25e67f(0x1a3),
      });
  }),
  (exports[_0x5829d0(0x187)] = async (_0xc973bd, _0x557dc5, _0x1f7379) => {
    const _0x4a669e = _0x5829d0;
    try {
      let _0x18f682;
      if (
        _0xc973bd[_0x4a669e(0x1b1)][_0x4a669e(0x197)] &&
        _0xc973bd[_0x4a669e(0x1b1)][_0x4a669e(0x197)]["startsWith"](
          _0x4a669e(0x194)
        )
      )
        _0x18f682 =
          _0xc973bd[_0x4a669e(0x1b1)][_0x4a669e(0x197)]["split"]("\x20")[0x1];
      else
        _0xc973bd[_0x4a669e(0x1a0)][_0x4a669e(0x1bd)] &&
          _0xc973bd["cookies"][_0x4a669e(0x1bd)] !== "loggedout" &&
          (_0x18f682 = _0xc973bd["cookies"][_0x4a669e(0x1bd)]);
      if (!_0x18f682) throw new Error(_0x4a669e(0x19d));
      const _0x51f304 = await promisify(jwt["verify"])(
          _0x18f682,
          process[_0x4a669e(0x1ba)][_0x4a669e(0x1cf)]
        ),
        _0xc89a93 = await User[_0x4a669e(0x1d2)](_0x51f304["id"]);
      if (!_0xc89a93)
        throw new Error(
          "the\x20user\x20belonging\x20to\x20the\x20token\x20doesn\x27t\x20exsists"
        );
      if (_0xc89a93["changedPasswordAfter"](_0x51f304[_0x4a669e(0x1b8)]))
        throw new Error(
          "User\x20recently\x20cahnged\x20the\x20password,\x20Please\x20login\x20again"
        );
      (_0xc973bd[_0x4a669e(0x1bf)] = _0xc89a93), _0x1f7379();
    } catch (_0x25b479) {
      _0x557dc5[_0x4a669e(0x1ab)](0x191)[_0x4a669e(0x1a4)]({
        status: _0x4a669e(0x199),
        message: _0x25b479[_0x4a669e(0x189)],
      });
    }
  }),
  (exports[_0x5829d0(0x1c3)] = async (_0xdd7240, _0x3c5e82, _0x1aa67b) => {
    const _0x225500 = _0x5829d0;
    try {
      const _0x4d871f = filterObj(
        _0xdd7240[_0x225500(0x1c0)],
        _0x225500(0x1b3),
        _0x225500(0x185),
        _0x225500(0x183)
      );
      if (_0xdd7240[_0x225500(0x1c0)][_0x225500(0x183)] !== undefined) {
        const _0x60c811 = await cloudinary["uploader"]["upload"](
          _0xdd7240[_0x225500(0x1c0)][_0x225500(0x183)],
          {
            folder: _0x225500(0x18b),
            width: 0x96,
            height: 0x96,
            crop: _0x225500(0x1b6),
            responsive_breakpoints: {
              create_derived: !![],
              bytes_step: 0x4e20,
              min_width: 0xc8,
              max_width: 0xc8,
            },
          }
        );
        _0x4d871f[_0x225500(0x183)] = {
          public_id: _0x60c811["public_id"],
          url: _0x60c811[_0x225500(0x1a1)],
        };
      }
      const _0x7df1de = await User[_0x225500(0x19a)](
        _0xdd7240["user"]["id"],
        _0x4d871f,
        { new: !![], runValidators: !![], useFindAndModify: ![] }
      );
      _0x3c5e82[_0x225500(0x1ab)](0xc8)["json"]({
        status: _0x225500(0x1c2),
        data: { user: _0x7df1de },
      });
    } catch (_0x4e9ded) {
      _0x3c5e82[_0x225500(0x1ab)](0x191)[_0x225500(0x1a4)]({
        status: _0x225500(0x1c9),
        message: _0x4e9ded[_0x225500(0x189)],
      });
    }
  }),
  (exports["updatePassword"] = async (_0x2c4b7b, _0x1cb080, _0x1dc6bc) => {
    const _0x4912b7 = _0x5829d0;
    try {
      const _0x5ed3cb = await User["findById"](
        _0x2c4b7b[_0x4912b7(0x1bf)]["id"]
      )[_0x4912b7(0x1ca)](_0x4912b7(0x196));
      if (
        !(await _0x5ed3cb["correctPassword"](
          _0x2c4b7b[_0x4912b7(0x1c0)][_0x4912b7(0x18e)],
          _0x5ed3cb[_0x4912b7(0x180)]
        ))
      )
        throw new Error(_0x4912b7(0x182));
      (_0x5ed3cb[_0x4912b7(0x180)] = _0x2c4b7b["body"][_0x4912b7(0x180)]),
        (_0x5ed3cb[_0x4912b7(0x1a7)] = _0x2c4b7b["body"][_0x4912b7(0x1a7)]),
        await _0x5ed3cb["save"](),
        createSendToken(_0x5ed3cb, 0xc8, _0x1cb080);
    } catch (_0x217ab0) {
      _0x1cb080[_0x4912b7(0x1ab)](0x194)[_0x4912b7(0x1a4)]({
        status: "fail",
        message: _0x217ab0[_0x4912b7(0x189)],
      });
    }
  }),
  (exports[_0x5829d0(0x192)] = async (_0x349e67, _0x3c40f4, _0x5a25f2) => {
    const _0x3254fe = _0x5829d0,
      _0x48fb10 = await User["findOne"]({
        email: _0x349e67[_0x3254fe(0x1c0)]["email"],
      });
    !_0x48fb10 &&
      _0x3c40f4[_0x3254fe(0x1ab)](0x190)[_0x3254fe(0x1a4)]({
        error: _0x3254fe(0x186),
      });
    const _0x984fe0 = _0x48fb10[_0x3254fe(0x195)]();
    await _0x48fb10[_0x3254fe(0x1b5)]({ validateBeforeSave: ![] });
    const _0xb04b75 =
        _0x349e67[_0x3254fe(0x17c)] +
        _0x3254fe(0x1c6) +
        _0x349e67[_0x3254fe(0x1cc)](_0x3254fe(0x190)) +
        "/user/resetPassword/" +
        _0x984fe0,
      _0x5ef6f1 = _0x3254fe(0x1a6) + _0xb04b75 + _0x3254fe(0x1a9);
    try {
      await sendEmail({
        email: _0x48fb10[_0x3254fe(0x1a2)],
        subject: _0x3254fe(0x1ae),
        message: _0x5ef6f1,
      }),
        _0x3c40f4[_0x3254fe(0x1ab)](0xc8)[_0x3254fe(0x1a4)]({
          status: _0x3254fe(0x1a3),
          message: _0x3254fe(0x198),
        });
    } catch (_0x761851) {
      return (
        (_0x48fb10[_0x3254fe(0x1bb)] = undefined),
        (_0x48fb10["passwordResetExpires"] = undefined),
        await _0x48fb10["save"]({ validateBeforeSave: ![] }),
        _0x3c40f4[_0x3254fe(0x1ab)](0x190)[_0x3254fe(0x1a4)]({
          error: _0x761851[_0x3254fe(0x189)],
        }),
        _0x5a25f2()
      );
    }
  }),
  (exports[_0x5829d0(0x1a8)] = async (_0x37b71d, _0x26ebe7, _0x1c4b18) => {
    const _0x331fa5 = _0x5829d0;
    try {
      const _0x2d726e = crypto[_0x331fa5(0x1cd)](_0x331fa5(0x1ce))
          [_0x331fa5(0x191)](_0x37b71d[_0x331fa5(0x184)]["token"])
          [_0x331fa5(0x17a)](_0x331fa5(0x1c5)),
        _0x482395 = await User[_0x331fa5(0x17d)]({
          passwordResetToken: _0x2d726e,
          passwordResetExpires: { $gt: Date[_0x331fa5(0x1ad)]() },
        });
      if (!_0x482395) throw new Error(_0x331fa5(0x17b));
      (_0x482395[_0x331fa5(0x180)] = _0x37b71d[_0x331fa5(0x1c0)]["password"]),
        (_0x482395[_0x331fa5(0x1a7)] =
          _0x37b71d[_0x331fa5(0x1c0)][_0x331fa5(0x1a7)]),
        (_0x482395[_0x331fa5(0x1bb)] = undefined),
        (_0x482395[_0x331fa5(0x1b4)] = undefined),
        await _0x482395[_0x331fa5(0x1b5)](),
        createSendToken(_0x482395, 0xc8, _0x26ebe7);
    } catch (_0x465e9b) {
      return (
        _0x26ebe7["status"](0x190)[_0x331fa5(0x1a4)]({
          status: _0x331fa5(0x199),
          error: _0x465e9b["message"],
        }),
        _0x1c4b18()
      );
    }
  }),
  (exports["getUserLogins"] = async (_0x40336b, _0x1b8b3a, _0x237f4d) => {
    const _0x15bb9c = _0x5829d0,
      _0x173152 = await User[_0x15bb9c(0x1d2)](_0x40336b["user"]);
    _0x1b8b3a["status"](0xc8)[_0x15bb9c(0x1a4)]({
      status: _0x15bb9c(0x1a3),
      user: _0x173152,
    });
  });
function _0x45c9() {
  const _0x41d3e7 = [
    "\x22\x20style=\x22\x20display:\x20inline-block;\x20margin:10px;\x20padding:10px;\x20background-color:\x20rgb(65,\x2060,\x2060,\x200.5);\x20border-radius:5px;\x20text-decoration:none;\x20color:white;\x20font-size:20px\x22>Reset\x20Password.</a><p>",
    "JWT_EXPIRES_IN",
    "status",
    "2846706PtisNH",
    "now",
    "Your\x20password\x20reset\x20token\x20valid\x20for\x2010\x20mins",
    "../Models/userModel",
    "2614648RCyrEv",
    "headers",
    "correctPassword",
    "name",
    "passwordResetExpires",
    "save",
    "scale",
    "../config.env",
    "iat",
    "../utils/Email",
    "env",
    "passwordResetToken",
    "Incorect\x20email\x20or\x20password",
    "jwt",
    "loggedout",
    "user",
    "body",
    "login",
    "Succes",
    "updateMe",
    "keys",
    "hex",
    "://",
    "util",
    "36WJwHTJ",
    "Fail",
    "select",
    "14YytSSl",
    "get",
    "createHash",
    "sha256",
    "JWT_SECRET",
    "_id",
    "245366VSePVi",
    "findById",
    "dotenv",
    "digest",
    "Token\x20is\x20invalid\x20or\x20Expired!!",
    "protocol",
    "findOne",
    "sign",
    "Please\x20provide\x20email\x20and\x20password",
    "password",
    "../utils/Cloudinary",
    "Your\x20current\x20password\x20is\x20wrong",
    "avatar",
    "params",
    "phoneNumber",
    "There\x20is\x20no\x20user\x20with\x20this\x20email",
    "protect",
    "15JNnTtN",
    "message",
    "cookie",
    "avatars",
    "5054724xvBSZM",
    "config",
    "passwordCurrent",
    "501986gdZCoj",
    "host",
    "update",
    "forgotPassword",
    "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg",
    "Bearer",
    "createPasswordResetToken",
    "+password",
    "authorization",
    "Token\x20send\x20to\x20email",
    "fail",
    "findByIdAndUpdate",
    "path",
    "JWT_COOKIE_EXPIRES_IN",
    "You\x20are\x20not\x20Logged!!\x20Please\x20log\x20in\x20to\x20get\x20access",
    "2497370rjSKpZ",
    "1929730jHLKzs",
    "cookies",
    "secure_url",
    "email",
    "success",
    "json",
    "forEach",
    "<p>Forgot\x20your\x20password?\x20Submit\x20a\x20PATCH\x20request\x20with\x20your\x20new\x20password\x20and\x20passwordConfirm.\x20Click\x20the\x20button\x20to\x20resetpassword\x20page.:\x20<a\x20href=\x22",
    "passwordConfirm",
    "resetPassword",
  ];
  _0x45c9 = function () {
    return _0x41d3e7;
  };
  return _0x45c9();
}
