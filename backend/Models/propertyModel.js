function _0x4111() {
  const _0x37f215 = [
    "Guest\x20House",
    "Please\x20give\x20the\x20maximum\x20no\x20of\x20Guest\x20that\x20can\x20occupy",
    "10aInsyg",
    "Washing\x20Machine",
    "Pool",
    "ObjectId",
    "slug",
    "1327830Pzqaaf",
    "User",
    "length",
    "7SGakkP",
    "city",
    "2233248nLEVkv",
    "Property",
    "Please\x20enter\x20your\x20property\x20name",
    "model",
    "House",
    "slugify",
    "Kitchen",
    "mongoose",
    "Entire\x20Home",
    "170920VZAdmI",
    "Schema",
    "exports",
    "The\x20images\x20array\x20must\x20contain\x20at\x20least\x205\x20images.",
    "36gzrceC",
    "Please\x20add\x20information\x20about\x20your\x20property.",
    "902892kedhpL",
    "pre",
    "407385jBIZyk",
    "Anytype",
    "48zUdehP",
    "535764veIcLc",
    "Types",
    "Please\x20enter\x20the\x20Price\x20per\x20night\x20value",
    "replaceAll",
    "address",
    "13:00",
    "107577purPHq",
    "76AuynjO",
    "Booking",
    "save",
    "toLowerCase",
  ];
  _0x4111 = function () {
    return _0x37f215;
  };
  return _0x4111();
}
const _0x56b591 = _0x4795;
(function (_0x5b892d, _0xde38aa) {
  const _0x35921c = _0x4795,
    _0x518c2a = _0x5b892d();
  while (!![]) {
    try {
      const _0x2ae18a =
        parseInt(_0x35921c(0x193)) / 0x1 +
        parseInt(_0x35921c(0x18e)) / 0x2 +
        (parseInt(_0x35921c(0x16e)) / 0x3) *
          (parseInt(_0x35921c(0x16f)) / 0x4) +
        (-parseInt(_0x35921c(0x175)) / 0x5) *
          (parseInt(_0x35921c(0x17f)) / 0x6) +
        (-parseInt(_0x35921c(0x17d)) / 0x7) *
          (-parseInt(_0x35921c(0x188)) / 0x8) +
        (parseInt(_0x35921c(0x18c)) / 0x9) *
          (-parseInt(_0x35921c(0x17a)) / 0xa) +
        (parseInt(_0x35921c(0x190)) / 0xb) * (parseInt(_0x35921c(0x192)) / 0xc);
      if (_0x2ae18a === _0xde38aa) break;
      else _0x518c2a["push"](_0x518c2a["shift"]());
    } catch (_0x468229) {
      _0x518c2a["push"](_0x518c2a["shift"]());
    }
  }
})(_0x4111, 0x89538);
const mongoose = require(_0x56b591(0x186)),
  slugify = require(_0x56b591(0x184)),
  propertySchema = new mongoose[_0x56b591(0x189)]({
    propertyName: { type: String, required: [!![], _0x56b591(0x181)] },
    description: { type: String, required: [!![], _0x56b591(0x18d)] },
    extraInfo: {
      type: String,
      default:
        "Nestled\x20in\x20a\x20tranquil\x20neighborhood,\x20the\x20house\x20exudes\x20an\x20aura\x20of\x20charm\x20and\x20elegance.\x20The\x20exterior\x20is\x20adorned\x20with\x20a\x20harmonious\x20blend\x20of\x20classic\x20and\x20contemporary\x20architectural\x20elements,\x20featuring\x20a\x20beautiful\x20brick\x20facade\x20and\x20a\x20welcoming\x20front\x20porch.As\x20you\x20step\x20inside,\x20you\x20are\x20greeted\x20by\x20a\x20spacious,\x20sunlit\x20living\x20room\x20with\x20high\x20ceilings\x20and\x20large\x20windows\x20that\x20invite\x20an\x20abundance\x20of\x20natural\x20light.\x20The\x20hardwood\x20floors\x20add\x20a\x20touch\x20of\x20warmth\x20to\x20the\x20space,\x20complementing\x20the\x20neutral\x20color\x20palette.The\x20kitchen\x20is\x20a\x20chef\x27s\x20dream,\x20equipped\x20with\x20modern\x20appliances,\x20sleek\x20countertops,\x20and\x20ample\x20storage\x20space.\x20It\x20opens\x20up\x20to\x20a\x20cozy\x20dining\x20area,\x20creating\x20a\x20perfect\x20setting\x20for\x20family\x20meals\x20and\x20gatherings.",
    },
    propertyType: {
      type: String,
      enum: [_0x56b591(0x183), "Flat", _0x56b591(0x173), "Hotel"],
      default: _0x56b591(0x183),
    },
    roomType: {
      type: String,
      enum: [_0x56b591(0x191), "Room", _0x56b591(0x187)],
      default: _0x56b591(0x191),
    },
    maximumGuest: { type: Number, required: [!![], _0x56b591(0x174)] },
    amenities: [
      {
        name: {
          type: String,
          required: !![],
          enum: [
            "Wifi",
            _0x56b591(0x185),
            "Ac",
            _0x56b591(0x176),
            "Tv",
            _0x56b591(0x177),
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
        validator: function (_0x4cd08b) {
          const _0x451027 = _0x56b591;
          return _0x4cd08b[_0x451027(0x17c)] >= 0x5;
        },
        message: _0x56b591(0x18b),
      },
    },
    price: { type: Number, required: [!![], _0x56b591(0x195)], default: 0x1f4 },
    address: { area: String, city: String, state: String, pincode: Number },
    currentBookings: [
      {
        bookingId: {
          type: mongoose[_0x56b591(0x189)][_0x56b591(0x194)]["ObjectId"],
          ref: _0x56b591(0x170),
        },
        fromDate: Date,
        toDate: Date,
        userId: {
          type: mongoose[_0x56b591(0x189)][_0x56b591(0x194)][_0x56b591(0x178)],
          ref: "User",
        },
      },
    ],
    userId: {
      type: mongoose[_0x56b591(0x189)]["Types"][_0x56b591(0x178)],
      ref: _0x56b591(0x17b),
    },
    slug: String,
    checkInTime: { type: String, default: "11:00" },
    checkOutTime: { type: String, default: _0x56b591(0x16d) },
  });
propertySchema[_0x56b591(0x18f)](_0x56b591(0x171), function (_0x55ac65) {
  const _0x99af6e = _0x56b591;
  (this[_0x99af6e(0x179)] = slugify(this["propertyName"], { lower: !![] })),
    _0x55ac65();
}),
  propertySchema["pre"](_0x56b591(0x171), function (_0x4f2e43) {
    const _0x265b23 = _0x56b591;
    (this[_0x265b23(0x16c)][_0x265b23(0x17e)] = this[_0x265b23(0x16c)][
      _0x265b23(0x17e)
    ]
      [_0x265b23(0x172)]()
      [_0x265b23(0x16b)]("\x20", "")),
      _0x4f2e43();
  });
const Property = mongoose[_0x56b591(0x182)](_0x56b591(0x180), propertySchema);
function _0x4795(_0xd1c0d, _0x5ba710) {
  const _0x4111cb = _0x4111();
  return (
    (_0x4795 = function (_0x4795d0, _0x498e22) {
      _0x4795d0 = _0x4795d0 - 0x16b;
      let _0x5bebdd = _0x4111cb[_0x4795d0];
      return _0x5bebdd;
    }),
    _0x4795(_0xd1c0d, _0x5ba710)
  );
}
module[_0x56b591(0x18a)] = Property;
