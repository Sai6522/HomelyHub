const _0x1cc74e = _0xfcb7;
function _0xfcb7(_0x572496, _0x597391) {
  const _0x40e8fd = _0x40e8();
  return (
    (_0xfcb7 = function (_0xfcb7bd, _0x2ef875) {
      _0xfcb7bd = _0xfcb7bd - 0x1cc;
      let _0x303ab6 = _0x40e8fd[_0xfcb7bd];
      return _0x303ab6;
    }),
    _0xfcb7(_0x572496, _0x597391)
  );
}
(function (_0x4c0366, _0x5811ed) {
  const _0x2f37dc = _0xfcb7,
    _0x54e5fb = _0x4c0366();
  while (!![]) {
    try {
      const _0x1c230e =
        -parseInt(_0x2f37dc(0x1e0)) / 0x1 +
        parseInt(_0x2f37dc(0x1d8)) / 0x2 +
        -parseInt(_0x2f37dc(0x1ec)) / 0x3 +
        (-parseInt(_0x2f37dc(0x1ce)) / 0x4) *
          (parseInt(_0x2f37dc(0x1e3)) / 0x5) +
        (-parseInt(_0x2f37dc(0x1d9)) / 0x6) *
          (parseInt(_0x2f37dc(0x1d7)) / 0x7) +
        -parseInt(_0x2f37dc(0x1ef)) / 0x8 +
        parseInt(_0x2f37dc(0x1d4)) / 0x9;
      if (_0x1c230e === _0x5811ed) break;
      else _0x54e5fb["push"](_0x54e5fb["shift"]());
    } catch (_0x331f4c) {
      _0x54e5fb["push"](_0x54e5fb["shift"]());
    }
  }
})(_0x40e8, 0x6089a);
const mongoose = require("mongoose"),
  validator = require(_0x1cc74e(0x1da)),
  bcrypt = require("bcryptjs"),
  crypto = require(_0x1cc74e(0x1ed)),
  userSchema = new mongoose[_0x1cc74e(0x1e7)](
    {
      name: { type: String, required: [!![], _0x1cc74e(0x1f0)] },
      email: {
        type: String,
        required: [!![], _0x1cc74e(0x1e8)],
        unique: !![],
        lowercase: !![],
        validate: [validator[_0x1cc74e(0x1cd)], _0x1cc74e(0x1ee)],
      },
      password: {
        type: String,
        required: [!![], _0x1cc74e(0x1dd)],
        minlength: [0x6, _0x1cc74e(0x1dc)],
        select: ![],
      },
      passwordConfirm: {
        type: String,
        required: [!![], _0x1cc74e(0x1de)],
        validate: function (_0x2707b0) {
          const _0x3c85c6 = _0x1cc74e;
          return _0x2707b0 === this[_0x3c85c6(0x1cf)];
        },
        message: "password\x20are\x20not\x20same\x20!",
      },
      phoneNumber: { type: String, required: !![], unique: !![] },
      avatar: { url: { type: String }, public_id: { type: String } },
      passwordChangedAt: { type: Date },
      passwordResetToken: String,
      passwordResetExpires: Date,
    },
    { timestamps: !![] }
  );
userSchema[_0x1cc74e(0x1e6)](_0x1cc74e(0x1df), async function (_0x1130f5) {
  const _0x43f7b9 = _0x1cc74e;
  if (!this["isModified"](_0x43f7b9(0x1cf))) return _0x1130f5();
  (this["password"] = await bcrypt[_0x43f7b9(0x1d0)](
    this[_0x43f7b9(0x1cf)],
    0xc
  )),
    (this[_0x43f7b9(0x1d5)] = undefined),
    _0x1130f5();
}),
  (userSchema[_0x1cc74e(0x1d3)][_0x1cc74e(0x1cc)] = async function (
    _0x211d73,
    _0x48cdce
  ) {
    const _0x511785 = _0x1cc74e;
    return await bcrypt[_0x511785(0x1e5)](_0x211d73, _0x48cdce);
  }),
  (userSchema[_0x1cc74e(0x1d3)]["changedPasswordAfter"] = function (_0x41150f) {
    const _0x235b00 = _0x1cc74e;
    if (this[_0x235b00(0x1ea)]) {
      const _0x36a741 = parseInt(
        this[_0x235b00(0x1ea)]["getTime"]() / 0x3e8,
        0xa
      );
      return _0x41150f < _0x36a741;
    }
    return ![];
  }),
  (userSchema[_0x1cc74e(0x1d3)]["createPasswordResetToken"] = function () {
    const _0x5bef26 = _0x1cc74e,
      _0x37e807 = crypto[_0x5bef26(0x1e2)](0x20)[_0x5bef26(0x1d1)](
        _0x5bef26(0x1e9)
      );
    return (
      (this[_0x5bef26(0x1d2)] = crypto["createHash"]("sha256")
        ["update"](_0x37e807)
        [_0x5bef26(0x1d6)](_0x5bef26(0x1e9))),
      (this[_0x5bef26(0x1e1)] = Date[_0x5bef26(0x1db)]() + 0xa * 0x3c * 0x3e8),
      _0x37e807
    );
  });
const User = mongoose[_0x1cc74e(0x1eb)]("User", userSchema);
function _0x40e8() {
  const _0x12fa6e = [
    "passwordConfirm",
    "digest",
    "7DVBZnn",
    "783338CqxRxE",
    "3071262wTGcun",
    "validator",
    "now",
    "Your\x20password\x20must\x20be\x20longer\x20than\x206\x20characters",
    "Please\x20enter\x20your\x20password",
    "Please\x20confirm\x20your\x20password",
    "save",
    "284249LfAXWn",
    "passwordResetExpires",
    "randomBytes",
    "15DyYjhs",
    "exports",
    "compare",
    "pre",
    "Schema",
    "Please\x20enter\x20your\x20email",
    "hex",
    "passwordChangedAt",
    "model",
    "2016144TCHQgq",
    "crypto",
    "Please\x20enter\x20valid\x20email\x20address",
    "1441472QZkwby",
    "Please\x20enter\x20your\x20name",
    "correctPassword",
    "isEmail",
    "357972pkiepK",
    "password",
    "hash",
    "toString",
    "passwordResetToken",
    "methods",
    "17285274jZgQSI",
  ];
  _0x40e8 = function () {
    return _0x12fa6e;
  };
  return _0x40e8();
}
module[_0x1cc74e(0x1e4)] = User;
