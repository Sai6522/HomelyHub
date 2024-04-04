const _0x4f2dc9 = _0x2ff7;
(function (_0x23652f, _0x397e6d) {
  const _0x265d26 = _0x2ff7,
    _0x564659 = _0x23652f();
  while (!![]) {
    try {
      const _0x35b994 =
        -parseInt(_0x265d26(0xf3)) / 0x1 +
        -parseInt(_0x265d26(0xf5)) / 0x2 +
        (-parseInt(_0x265d26(0xff)) / 0x3) *
          (-parseInt(_0x265d26(0xf9)) / 0x4) +
        -parseInt(_0x265d26(0xed)) / 0x5 +
        (-parseInt(_0x265d26(0xf2)) / 0x6) *
          (-parseInt(_0x265d26(0xfc)) / 0x7) +
        (-parseInt(_0x265d26(0xfd)) / 0x8) * (parseInt(_0x265d26(0xf7)) / 0x9) +
        parseInt(_0x265d26(0xf8)) / 0xa;
      if (_0x35b994 === _0x397e6d) break;
      else _0x564659["push"](_0x564659["shift"]());
    } catch (_0x3f9cb9) {
      _0x564659["push"](_0x564659["shift"]());
    }
  }
})(_0x2089, 0x669e8);
function _0x2089() {
  const _0x729f72 = [
    "1363306DpYPfA",
    "4945592EPEWcS",
    "exports",
    "3153AkMGvZ",
    "property",
    "pre",
    "user",
    "booking\x20must\x20have\x20a\x20time.",
    "1829100NmCuer",
    "ObjectId",
    "Booking",
    "maximumGuest\x20location\x20images\x20propertyName\x20address",
    "now",
    "6ecEHaQ",
    "725481rTPPkj",
    "Schema",
    "1561712vuDwuL",
    "User",
    "9ZtSpaF",
    "20737650yuAtZB",
    "2444WymawS",
    "populate",
    "Property",
  ];
  _0x2089 = function () {
    return _0x729f72;
  };
  return _0x2089();
}
const mongoose = require("mongoose"),
  Property = require("./propertyModel"),
  bookingSchema = new mongoose[_0x4f2dc9(0xf4)](
    {
      property: {
        type: mongoose[_0x4f2dc9(0xf4)][_0x4f2dc9(0xee)],
        ref: _0x4f2dc9(0xfb),
        required: [!![], "Booking\x20must\x20belong\x20to\x20a\x20Property!"],
      },
      user: {
        type: mongoose[_0x4f2dc9(0xf4)][_0x4f2dc9(0xee)],
        ref: _0x4f2dc9(0xf6),
        required: [!![], "Booking\x20must\x20belong\x20to\x20a\x20User!"],
      },
      price: { type: Number, required: [!![], _0x4f2dc9(0xec)] },
      createdAt: { type: Date, default: Date[_0x4f2dc9(0xf1)]() },
      paid: { type: Boolean, default: !![] },
      fromDate: { type: Date },
      toDate: { type: Date },
      guests: { type: Number },
      numberOfnights: { type: Number },
    },
    { timestamps: !![] }
  );
bookingSchema[_0x4f2dc9(0x101)](/^find/, function (_0x41e3a7) {
  const _0x69709e = _0x4f2dc9;
  this[_0x69709e(0xfa)](_0x69709e(0xeb))[_0x69709e(0xfa)]({
    path: _0x69709e(0x100),
    select: _0x69709e(0xf0),
  }),
    _0x41e3a7();
});
const Booking = mongoose["model"](_0x4f2dc9(0xef), bookingSchema);
function _0x2ff7(_0x2dc829, _0x341795) {
  const _0x2089b8 = _0x2089();
  return (
    (_0x2ff7 = function (_0x2ff7de, _0xe3cc4) {
      _0x2ff7de = _0x2ff7de - 0xeb;
      let _0x51a3ce = _0x2089b8[_0x2ff7de];
      return _0x51a3ce;
    }),
    _0x2ff7(_0x2dc829, _0x341795)
  );
}
module[_0x4f2dc9(0xfe)] = Booking;
