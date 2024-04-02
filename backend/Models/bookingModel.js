const _0x1f6b42 = _0x1966;
function _0x1966(_0x20b7cf, _0x5d2ad7) {
  const _0x37e819 = _0x37e8();
  return (
    (_0x1966 = function (_0x196658, _0x180850) {
      _0x196658 = _0x196658 - 0x173;
      let _0x2cfcc3 = _0x37e819[_0x196658];
      return _0x2cfcc3;
    }),
    _0x1966(_0x20b7cf, _0x5d2ad7)
  );
}
(function (_0x4c9dca, _0x2d83e0) {
  const _0x25cbc2 = _0x1966,
    _0x52e439 = _0x4c9dca();
  while (!![]) {
    try {
      const _0x4c647d =
        -parseInt(_0x25cbc2(0x174)) / 0x1 +
        parseInt(_0x25cbc2(0x183)) / 0x2 +
        (parseInt(_0x25cbc2(0x177)) / 0x3) *
          (-parseInt(_0x25cbc2(0x188)) / 0x4) +
        parseInt(_0x25cbc2(0x187)) / 0x5 +
        (-parseInt(_0x25cbc2(0x181)) / 0x6) *
          (-parseInt(_0x25cbc2(0x173)) / 0x7) +
        -parseInt(_0x25cbc2(0x17f)) / 0x8 +
        (-parseInt(_0x25cbc2(0x17c)) / 0x9) *
          (-parseInt(_0x25cbc2(0x17a)) / 0xa);
      if (_0x4c647d === _0x2d83e0) break;
      else _0x52e439["push"](_0x52e439["shift"]());
    } catch (_0x32ec0f) {
      _0x52e439["push"](_0x52e439["shift"]());
    }
  }
})(_0x37e8, 0x1f25f);
const mongoose = require(_0x1f6b42(0x176)),
  Property = require(_0x1f6b42(0x178)),
  bookingSchema = new mongoose["Schema"](
    {
      property: {
        type: mongoose[_0x1f6b42(0x17e)]["ObjectId"],
        ref: _0x1f6b42(0x17d),
        required: [!![], "Booking\x20must\x20belong\x20to\x20a\x20Property!"],
      },
      user: {
        type: mongoose[_0x1f6b42(0x17e)][_0x1f6b42(0x180)],
        ref: _0x1f6b42(0x175),
        required: [!![], _0x1f6b42(0x179)],
      },
      price: { type: Number, required: [!![], _0x1f6b42(0x186)] },
      createdAt: { type: Date, default: Date["now"]() },
      paid: { type: Boolean, default: !![] },
      fromDate: { type: Date },
      toDate: { type: Date },
      guests: { type: Number },
      numberOfnights: { type: Number },
    },
    { timestamps: !![] }
  );
bookingSchema[_0x1f6b42(0x185)](/^find/, function (_0x23d395) {
  const _0x49568b = _0x1f6b42;
  this["populate"](_0x49568b(0x184))[_0x49568b(0x182)]({
    path: _0x49568b(0x189),
    select: "maximumGuest\x20location\x20images\x20propertyName\x20address",
  }),
    _0x23d395();
});
const Booking = mongoose["model"](_0x1f6b42(0x17b), bookingSchema);
module["exports"] = Booking;
function _0x37e8() {
  const _0x42ed79 = [
    "1548152kdCtpO",
    "ObjectId",
    "24dCHTKK",
    "populate",
    "64786NjquYi",
    "user",
    "pre",
    "booking\x20must\x20have\x20a\x20time.",
    "1229480BrlKEq",
    "48ErmXlS",
    "property",
    "427462QUpefK",
    "182476JaLMxN",
    "User",
    "mongoose",
    "27771QExOsX",
    "./propertyModel",
    "Booking\x20must\x20belong\x20to\x20a\x20User!",
    "307030aqxHQU",
    "Booking",
    "27ayyuIk",
    "Property",
    "Schema",
  ];
  _0x37e8 = function () {
    return _0x42ed79;
  };
  return _0x37e8();
}
