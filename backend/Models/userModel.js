function _0x38c9(_0x304262, _0x3ed657) {
  const _0x3dbf72 = _0x3dbf();
  return (
    (_0x38c9 = function (_0x38c942, _0x57b2c8) {
      _0x38c942 = _0x38c942 - 0x12b;
      let _0x5bdc79 = _0x3dbf72[_0x38c942];
      return _0x5bdc79;
    }),
    _0x38c9(_0x304262, _0x3ed657)
  );
}
const _0x31ab22 = _0x38c9;
(function (_0x46f44c, _0x4f56a6) {
  const _0x5a39a0 = _0x38c9,
    _0x1ce816 = _0x46f44c();
  while (!![]) {
    try {
      const _0x210f5f =
        (-parseInt(_0x5a39a0(0x14e)) / 0x1) *
          (parseInt(_0x5a39a0(0x133)) / 0x2) +
        parseInt(_0x5a39a0(0x13f)) / 0x3 +
        (-parseInt(_0x5a39a0(0x137)) / 0x4) *
          (parseInt(_0x5a39a0(0x132)) / 0x5) +
        parseInt(_0x5a39a0(0x140)) / 0x6 +
        -parseInt(_0x5a39a0(0x135)) / 0x7 +
        (-parseInt(_0x5a39a0(0x145)) / 0x8) *
          (-parseInt(_0x5a39a0(0x148)) / 0x9) +
        (parseInt(_0x5a39a0(0x12b)) / 0xa) *
          (-parseInt(_0x5a39a0(0x14d)) / 0xb);
      if (_0x210f5f === _0x4f56a6) break;
      else _0x1ce816["push"](_0x1ce816["shift"]());
    } catch (_0x56302f) {
      _0x1ce816["push"](_0x1ce816["shift"]());
    }
  }
})(_0x3dbf, 0x24b12);
function _0x3dbf() {
  const _0x2283fc = [
    "passwordChangedAt",
    "changedPasswordAfter",
    "Please\x20enter\x20your\x20name",
    "817551rrEafn",
    "1685958SzKRch",
    "Please\x20confirm\x20your\x20password",
    "crypto",
    "createHash",
    "methods",
    "2365080cJoBKw",
    "Schema",
    "compare",
    "9qLGLaR",
    "Your\x20password\x20must\x20be\x20longer\x20than\x206\x20characters",
    "hash",
    "toString",
    "randomBytes",
    "913KLGvpo",
    "60889EnKnME",
    "Please\x20enter\x20your\x20password",
    "26930XTETjx",
    "exports",
    "hex",
    "digest",
    "update",
    "pre",
    "Please\x20enter\x20your\x20email",
    "11125SIrngI",
    "6QNsZsw",
    "password\x20are\x20not\x20same\x20!",
    "2033108IxNhAf",
    "save",
    "4pCNgtv",
    "model",
    "sha256",
    "passwordResetToken",
    "password",
  ];
  _0x3dbf = function () {
    return _0x2283fc;
  };
  return _0x3dbf();
}
const mongoose = require("mongoose"),
  validator = require("validator"),
  bcrypt = require("bcryptjs"),
  crypto = require(_0x31ab22(0x142)),
  userSchema = new mongoose[_0x31ab22(0x146)](
    {
      name: { type: String, required: [!![], _0x31ab22(0x13e)] },
      email: {
        type: String,
        required: [!![], _0x31ab22(0x131)],
        unique: !![],
        lowercase: !![],
        validate: [
          validator["isEmail"],
          "Please\x20enter\x20valid\x20email\x20address",
        ],
      },
      password: {
        type: String,
        required: [!![], _0x31ab22(0x14f)],
        minlength: [0x6, _0x31ab22(0x149)],
        select: ![],
      },
      passwordConfirm: {
        type: String,
        required: [!![], _0x31ab22(0x141)],
        validate: function (_0x58cab2) {
          const _0x541dad = _0x31ab22;
          return _0x58cab2 === this[_0x541dad(0x13b)];
        },
        message: _0x31ab22(0x134),
      },
      phoneNumber: { type: String, required: !![], unique: !![] },
      avatar: { url: { type: String }, public_id: { type: String } },
      passwordChangedAt: { type: Date },
      passwordResetToken: String,
      passwordResetExpires: Date,
    },
    { timestamps: !![] }
  );
userSchema[_0x31ab22(0x130)](_0x31ab22(0x136), async function (_0x441f35) {
  const _0x340ff0 = _0x31ab22;
  if (!this["isModified"](_0x340ff0(0x13b))) return _0x441f35();
  (this[_0x340ff0(0x13b)] = await bcrypt[_0x340ff0(0x14a)](
    this[_0x340ff0(0x13b)],
    0xc
  )),
    (this["passwordConfirm"] = undefined),
    _0x441f35();
}),
  (userSchema[_0x31ab22(0x144)]["correctPassword"] = async function (
    _0x3358bd,
    _0x230331
  ) {
    const _0x2da1f4 = _0x31ab22;
    return await bcrypt[_0x2da1f4(0x147)](_0x3358bd, _0x230331);
  }),
  (userSchema["methods"][_0x31ab22(0x13d)] = function (_0x19bd0c) {
    const _0x131f79 = _0x31ab22;
    if (this["passwordChangedAt"]) {
      const _0x2ff4ce = parseInt(
        this[_0x131f79(0x13c)]["getTime"]() / 0x3e8,
        0xa
      );
      return _0x19bd0c < _0x2ff4ce;
    }
    return ![];
  }),
  (userSchema[_0x31ab22(0x144)]["createPasswordResetToken"] = function () {
    const _0x18b161 = _0x31ab22,
      _0x21477e = crypto[_0x18b161(0x14c)](0x20)[_0x18b161(0x14b)](
        _0x18b161(0x12d)
      );
    return (
      (this[_0x18b161(0x13a)] = crypto[_0x18b161(0x143)](_0x18b161(0x139))
        [_0x18b161(0x12f)](_0x21477e)
        [_0x18b161(0x12e)]("hex")),
      (this["passwordResetExpires"] = Date["now"]() + 0xa * 0x3c * 0x3e8),
      _0x21477e
    );
  });
const User = mongoose[_0x31ab22(0x138)]("User", userSchema);
module[_0x31ab22(0x12c)] = User;
