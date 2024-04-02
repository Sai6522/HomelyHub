const _0x199fd6 = _0x3b1e;
function _0x3b1e(_0x4fd490, _0x144e93) {
  const _0x440200 = _0x4402();
  return (
    (_0x3b1e = function (_0x3b1e3f, _0x14b6f8) {
      _0x3b1e3f = _0x3b1e3f - 0xdb;
      let _0x491322 = _0x440200[_0x3b1e3f];
      return _0x491322;
    }),
    _0x3b1e(_0x4fd490, _0x144e93)
  );
}
(function (_0x30783d, _0x1281cb) {
  const _0x5edce3 = _0x3b1e,
    _0x31c45e = _0x30783d();
  while (!![]) {
    try {
      const _0x268718 =
        -parseInt(_0x5edce3(0xe4)) / 0x1 +
        -parseInt(_0x5edce3(0xef)) / 0x2 +
        (-parseInt(_0x5edce3(0xe5)) / 0x3) *
          (-parseInt(_0x5edce3(0xe8)) / 0x4) +
        parseInt(_0x5edce3(0x101)) / 0x5 +
        -parseInt(_0x5edce3(0xfb)) / 0x6 +
        (parseInt(_0x5edce3(0xf0)) / 0x7) * (-parseInt(_0x5edce3(0xfe)) / 0x8) +
        -parseInt(_0x5edce3(0xdc)) / 0x9;
      if (_0x268718 === _0x1281cb) break;
      else _0x31c45e["push"](_0x31c45e["shift"]());
    } catch (_0x155772) {
      _0x31c45e["push"](_0x31c45e["shift"]());
    }
  }
})(_0x4402, 0x715bb);
const path = require(_0x199fd6(0xf2)),
  dotenv = require("dotenv")[_0x199fd6(0xdf)]({
    path: path[_0x199fd6(0xe1)](__dirname, _0x199fd6(0xde)),
  }),
  stripe = require("stripe")(process[_0x199fd6(0xeb)]["STRIPE_SECRECT_KEY"]),
  Property = require(_0x199fd6(0xfd)),
  Booking = require("../Models/bookingModel"),
  moment = require(_0x199fd6(0x100));
(exports["getcheckOutSession"] = async (_0x38a29c, _0x60d7d5, _0x1dec30) => {
  const _0x451669 = _0x199fd6,
    {
      amount: _0x22af66,
      currency: _0x1b822c,
      paymentMethodTypes: _0x4ae456,
      propertyName: _0x5aff34,
    } = _0x38a29c[_0x451669(0xe3)];
  try {
    const _0x109ff7 = await stripe[_0x451669(0xee)][_0x451669(0xfa)]({
      amount: _0x22af66 * 0x64,
      currency: _0x1b822c || "inr",
      payment_method_types: _0x4ae456,
      description: _0x451669(0xec),
      metadata: { propertyName: JSON[_0x451669(0xdd)](_0x5aff34) },
    });
    _0x60d7d5["json"]({ clientSecret: _0x109ff7["client_secret"] });
  } catch (_0x2c9894) {
    _0x60d7d5["status"](0x1f4)[_0x451669(0xf5)]({
      error: _0x2c9894[_0x451669(0xf7)],
    }),
      console[_0x451669(0xed)](_0x2c9894);
  }
}),
  (exports[_0x199fd6(0xf8)] = async (_0x9a28bf, _0x28ea48) => {
    const _0x370dbc = _0x199fd6;
    try {
      if (!_0x9a28bf[_0x370dbc(0xf1)])
        throw new Error("Please\x20login\x20First");
      const {
          property: _0x354373,
          price: _0x2209da,
          guests: _0x464497,
          fromDate: _0x3ea417,
          toDate: _0x1800f4,
        } = _0x9a28bf[_0x370dbc(0xe3)],
        _0x2da1ba = moment(_0x3ea417),
        _0x5dea5d = moment(_0x1800f4),
        _0x1b6cb9 = _0x5dea5d[_0x370dbc(0xf4)](_0x2da1ba, _0x370dbc(0xf9)),
        _0x133d9b = await Property[_0x370dbc(0x102)](_0x354373),
        _0x39730a = _0x133d9b[_0x370dbc(0xff)]["some"]((_0x4c8d88) => {
          const _0x5c1f31 = _0x370dbc;
          return (
            (_0x4c8d88[_0x5c1f31(0xf6)] <= new Date(_0x3ea417) &&
              new Date(_0x3ea417) <= _0x4c8d88["toDate"]) ||
            (_0x4c8d88["fromDate"] <= new Date(_0x1800f4) &&
              new Date(_0x1800f4) <= _0x4c8d88[_0x5c1f31(0xe0)])
          );
        });
      if (_0x39730a)
        return _0x28ea48[_0x370dbc(0xdb)](0x190)["json"]({
          status: _0x370dbc(0xea),
          message: _0x370dbc(0xe2),
        });
      const _0xad0059 = await Booking[_0x370dbc(0xfa)]({
          property: _0x354373,
          price: _0x2209da,
          guests: _0x464497,
          fromDate: _0x3ea417,
          toDate: _0x1800f4,
          numberOfnights: _0x1b6cb9,
          user: _0x9a28bf[_0x370dbc(0xf1)]["_id"],
        }),
        _0x681af6 = await Property[_0x370dbc(0xe7)](
          _0x354373,
          {
            $push: {
              currentBookings: {
                bookingId: _0xad0059["id"],
                fromDate: _0x3ea417,
                toDate: _0x1800f4,
                userId: _0xad0059[_0x370dbc(0xf1)],
              },
            },
          },
          { new: !![] }
        );
      _0x28ea48[_0x370dbc(0xdb)](0xc8)[_0x370dbc(0xf5)]({
        status: _0x370dbc(0xe9),
        data: { booking: _0xad0059, updatedProperty: _0x681af6 },
      });
    } catch (_0x3a3d3d) {
      _0x28ea48["status"](0x191)[_0x370dbc(0xf5)]({
        status: _0x370dbc(0xea),
        message: _0x3a3d3d[_0x370dbc(0xf7)],
      });
    }
  }),
  (exports["getUserBookings"] = async (_0x5afb02, _0x4e33ca) => {
    const _0x1cf5e8 = _0x199fd6;
    try {
      const _0x1c112b = await Booking["find"]({
        user: _0x5afb02[_0x1cf5e8(0xf1)][_0x1cf5e8(0xfc)],
      });
      _0x4e33ca[_0x1cf5e8(0xdb)](0xc8)[_0x1cf5e8(0xf5)]({
        status: _0x1cf5e8(0xe9),
        data: { bookings: _0x1c112b },
      });
    } catch (_0x228115) {
      _0x4e33ca[_0x1cf5e8(0xdb)](0x191)[_0x1cf5e8(0xf5)]({
        status: "fail",
        message: _0x228115[_0x1cf5e8(0xf7)],
      });
    }
  }),
  (exports["getBookingDetails"] = async (_0x213577, _0x587e90) => {
    const _0x575363 = _0x199fd6;
    try {
      const _0x37749d = await Booking[_0x575363(0x102)](
        _0x213577[_0x575363(0xf3)][_0x575363(0xe6)]
      );
      _0x587e90[_0x575363(0xdb)](0xc8)[_0x575363(0xf5)]({
        status: _0x575363(0xe9),
        data: { bookings: _0x37749d },
      });
    } catch (_0x1d76c5) {
      _0x587e90["status"](0x191)[_0x575363(0xf5)]({
        status: "fail",
        message: _0x1d76c5[_0x575363(0xf7)],
      });
    }
  });
function _0x4402() {
  const _0x15d99c = [
    "453466fNpVli",
    "14FesIiC",
    "user",
    "path",
    "params",
    "diff",
    "json",
    "fromDate",
    "message",
    "createBookings",
    "days",
    "create",
    "1677558nScfqg",
    "_id",
    "../Models/propertyModel",
    "275288eqCPtg",
    "currentBookings",
    "moment",
    "1692180nuOEuz",
    "findById",
    "status",
    "89325JoSjwM",
    "stringify",
    "../config.env",
    "config",
    "toDate",
    "join",
    "The\x20property\x20is\x20already\x20booked\x20for\x20the\x20requested\x20dates.",
    "body",
    "138176xqHzLH",
    "1239Tbalxg",
    "bookingId",
    "findByIdAndUpdate",
    "8224YeDGjp",
    "success",
    "fail",
    "env",
    "Payment\x20for\x20testing",
    "log",
    "paymentIntents",
  ];
  _0x4402 = function () {
    return _0x15d99c;
  };
  return _0x4402();
}
