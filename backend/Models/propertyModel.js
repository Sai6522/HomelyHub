const _0x4469dc = _0x1880;
function _0x12f5() {
  const _0x2c1ae9 = [
    "Kitchen",
    "length",
    "model",
    "Flat",
    "pre",
    "Anytype",
    "416632fpMVXl",
    "House",
    "Pool",
    "slugify",
    "address",
    "192aNHYOl",
    "13:00",
    "Please\x20enter\x20the\x20Price\x20per\x20night\x20value",
    "Please\x20enter\x20your\x20property\x20name",
    "13460Wzpymr",
    "4839876vstacT",
    "save",
    "11:00",
    "Please\x20give\x20the\x20maximum\x20no\x20of\x20Guest\x20that\x20can\x20occupy",
    "2924649tjgRxD",
    "propertyName",
    "1007944FSftuB",
    "slug",
    "Please\x20add\x20information\x20about\x20your\x20property.",
    "Property",
    "403158MLTDmu",
    "ObjectId",
    "User",
    "Schema",
    "city",
    "Guest\x20House",
    "94438URFbCe",
    "Room",
    "Types",
    "exports",
    "mongoose",
    "6Kcnyjv",
    "The\x20images\x20array\x20must\x20contain\x20at\x20least\x205\x20images.",
    "Booking",
  ];
  _0x12f5 = function () {
    return _0x2c1ae9;
  };
  return _0x12f5();
}
function _0x1880(_0x450d05, _0x1043e8) {
  const _0x12f574 = _0x12f5();
  return (
    (_0x1880 = function (_0x18802d, _0x23bd30) {
      _0x18802d = _0x18802d - 0x110;
      let _0x20fcb6 = _0x12f574[_0x18802d];
      return _0x20fcb6;
    }),
    _0x1880(_0x450d05, _0x1043e8)
  );
}
(function (_0x15a89b, _0x418a4a) {
  const _0x2bc207 = _0x1880,
    _0x4b629d = _0x15a89b();
  while (!![]) {
    try {
      const _0x7f9ac8 =
        parseInt(_0x2bc207(0x116)) / 0x1 +
        (parseInt(_0x2bc207(0x11c)) / 0x2) *
          (-parseInt(_0x2bc207(0x121)) / 0x3) +
        -parseInt(_0x2bc207(0x112)) / 0x4 +
        (parseInt(_0x2bc207(0x133)) / 0x5) *
          (parseInt(_0x2bc207(0x12f)) / 0x6) +
        -parseInt(_0x2bc207(0x110)) / 0x7 +
        -parseInt(_0x2bc207(0x12a)) / 0x8 +
        parseInt(_0x2bc207(0x134)) / 0x9;
      if (_0x7f9ac8 === _0x418a4a) break;
      else _0x4b629d["push"](_0x4b629d["shift"]());
    } catch (_0x515521) {
      _0x4b629d["push"](_0x4b629d["shift"]());
    }
  }
})(_0x12f5, 0x33744);
const mongoose = require(_0x4469dc(0x120)),
  slugify = require(_0x4469dc(0x12d)),
  propertySchema = new mongoose[_0x4469dc(0x119)]({
    propertyName: { type: String, required: [!![], _0x4469dc(0x132)] },
    description: { type: String, required: [!![], _0x4469dc(0x114)] },
    extraInfo: {
      type: String,
      default:
        "Nestled\x20in\x20a\x20tranquil\x20neighborhood,\x20the\x20house\x20exudes\x20an\x20aura\x20of\x20charm\x20and\x20elegance.\x20The\x20exterior\x20is\x20adorned\x20with\x20a\x20harmonious\x20blend\x20of\x20classic\x20and\x20contemporary\x20architectural\x20elements,\x20featuring\x20a\x20beautiful\x20brick\x20facade\x20and\x20a\x20welcoming\x20front\x20porch.As\x20you\x20step\x20inside,\x20you\x20are\x20greeted\x20by\x20a\x20spacious,\x20sunlit\x20living\x20room\x20with\x20high\x20ceilings\x20and\x20large\x20windows\x20that\x20invite\x20an\x20abundance\x20of\x20natural\x20light.\x20The\x20hardwood\x20floors\x20add\x20a\x20touch\x20of\x20warmth\x20to\x20the\x20space,\x20complementing\x20the\x20neutral\x20color\x20palette.The\x20kitchen\x20is\x20a\x20chef\x27s\x20dream,\x20equipped\x20with\x20modern\x20appliances,\x20sleek\x20countertops,\x20and\x20ample\x20storage\x20space.\x20It\x20opens\x20up\x20to\x20a\x20cozy\x20dining\x20area,\x20creating\x20a\x20perfect\x20setting\x20for\x20family\x20meals\x20and\x20gatherings.",
    },
    propertyType: {
      type: String,
      enum: [_0x4469dc(0x12b), _0x4469dc(0x127), _0x4469dc(0x11b), "Hotel"],
      default: "House",
    },
    roomType: {
      type: String,
      enum: [_0x4469dc(0x129), _0x4469dc(0x11d), "Entire\x20Home"],
      default: _0x4469dc(0x129),
    },
    maximumGuest: { type: Number, required: [!![], _0x4469dc(0x137)] },
    amenities: [
      {
        name: {
          type: String,
          required: !![],
          enum: [
            "Wifi",
            _0x4469dc(0x124),
            "Ac",
            "Washing\x20Machine",
            "Tv",
            _0x4469dc(0x12c),
            "Free\x20Parking",
          ],
        },
        icon: { type: String, required: !![] },
      },
    ],
    images: {
      type: [
        { public_id: { type: String }, url: { type: String, required: !![] } },
      ],
      validate: {
        validator: function (_0x565e2c) {
          const _0x191031 = _0x4469dc;
          return _0x565e2c[_0x191031(0x125)] >= 0x5;
        },
        message: _0x4469dc(0x122),
      },
    },
    price: { type: Number, required: [!![], _0x4469dc(0x131)], default: 0x1f4 },
    address: { area: String, city: String, state: String, pincode: Number },
    currentBookings: [
      {
        bookingId: {
          type: mongoose["Schema"][_0x4469dc(0x11e)][_0x4469dc(0x117)],
          ref: _0x4469dc(0x123),
        },
        fromDate: Date,
        toDate: Date,
        userId: {
          type: mongoose[_0x4469dc(0x119)][_0x4469dc(0x11e)][_0x4469dc(0x117)],
          ref: _0x4469dc(0x118),
        },
      },
    ],
    userId: {
      type: mongoose[_0x4469dc(0x119)][_0x4469dc(0x11e)]["ObjectId"],
      ref: _0x4469dc(0x118),
    },
    slug: String,
    checkInTime: { type: String, default: _0x4469dc(0x136) },
    checkOutTime: { type: String, default: _0x4469dc(0x130) },
  });
propertySchema[_0x4469dc(0x128)](_0x4469dc(0x135), function (_0x2f54cb) {
  const _0x43cef0 = _0x4469dc;
  (this[_0x43cef0(0x113)] = slugify(this[_0x43cef0(0x111)], { lower: !![] })),
    _0x2f54cb();
}),
  propertySchema[_0x4469dc(0x128)](_0x4469dc(0x135), function (_0x3774a5) {
    const _0xce2c8d = _0x4469dc;
    (this[_0xce2c8d(0x12e)]["city"] = this["address"][_0xce2c8d(0x11a)]
      ["toLowerCase"]()
      ["replaceAll"]("\x20", "")),
      _0x3774a5();
  });
const Property = mongoose[_0x4469dc(0x126)](_0x4469dc(0x115), propertySchema);
module[_0x4469dc(0x11f)] = Property;
