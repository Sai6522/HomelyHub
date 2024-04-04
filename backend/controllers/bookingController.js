function _0x3f03(_0x27037b, _0x591f89) {
  const _0x524998 = _0x5249();
  return (
    (_0x3f03 = function (_0x3f0383, _0x24db43) {
      _0x3f0383 = _0x3f0383 - 0x8b;
      let _0x5e8d15 = _0x524998[_0x3f0383];
      return _0x5e8d15;
    }),
    _0x3f03(_0x27037b, _0x591f89)
  );
}
const _0x1d4d01 = _0x3f03;
(function (_0x4a264b, _0x17f49a) {
  const _0x3b9f93 = _0x3f03,
    _0x5a3d51 = _0x4a264b();
  while (!![]) {
    try {
      const _0x1a680a =
        parseInt(_0x3b9f93(0x9c)) / 0x1 +
        parseInt(_0x3b9f93(0x8e)) / 0x2 +
        (-parseInt(_0x3b9f93(0x8b)) / 0x3) *
          (-parseInt(_0x3b9f93(0x92)) / 0x4) +
        -parseInt(_0x3b9f93(0xb8)) / 0x5 +
        (-parseInt(_0x3b9f93(0xa1)) / 0x6) * (parseInt(_0x3b9f93(0x90)) / 0x7) +
        -parseInt(_0x3b9f93(0x96)) / 0x8 +
        (-parseInt(_0x3b9f93(0xad)) / 0x9) * (-parseInt(_0x3b9f93(0x9f)) / 0xa);
      if (_0x1a680a === _0x17f49a) break;
      else _0x5a3d51["push"](_0x5a3d51["shift"]());
    } catch (_0xa67d30) {
      _0x5a3d51["push"](_0x5a3d51["shift"]());
    }
  }
})(_0x5249, 0xf18e0);
function _0x5249() {
  const _0x5cd4d0 = [
    "../config.env",
    "status",
    "8721176kADOQP",
    "Please\x20login\x20First",
    "STRIPE_SECRECT_KEY",
    "success",
    "findByIdAndUpdate",
    "../Models/propertyModel",
    "595544fjmieq",
    "some",
    "create",
    "10dwCtXm",
    "paymentIntents",
    "6hEyDyS",
    "message",
    "user",
    "params",
    "fail",
    "stripe",
    "getcheckOutSession",
    "getUserBookings",
    "client_secret",
    "log",
    "Payment\x20for\x20testing",
    "stringify",
    "6818463eAOspo",
    "inr",
    "The\x20property\x20is\x20already\x20booked\x20for\x20the\x20requested\x20dates.",
    "body",
    "toDate",
    "join",
    "createBookings",
    "../Models/bookingModel",
    "currentBookings",
    "fromDate",
    "bookingId",
    "4178610FYRhmx",
    "173499GwKKnO",
    "getBookingDetails",
    "findById",
    "1929164wzKNAQ",
    "days",
    "8366953BxfuRT",
    "json",
    "124kZGdAw",
    "moment",
  ];
  _0x5249 = function () {
    return _0x5cd4d0;
  };
  return _0x5249();
}
const path = require("path"),
  dotenv = require("dotenv")["config"]({
    path: path[_0x1d4d01(0xb2)](__dirname, _0x1d4d01(0x94)),
  }),
  stripe = require(_0x1d4d01(0xa6))(process["env"][_0x1d4d01(0x98)]),
  Property = require(_0x1d4d01(0x9b)),
  Booking = require(_0x1d4d01(0xb4)),
  moment = require(_0x1d4d01(0x93));
(exports[_0x1d4d01(0xa7)] = async (_0x3949a9, _0x2d6ebb, _0x283602) => {
  const _0x53f398 = _0x1d4d01;
  console[_0x53f398(0xaa)](_0x3949a9[_0x53f398(0xb0)]);
  const {
    amount: _0x2b73aa,
    currency: _0x5511aa,
    paymentMethodTypes: _0x4e806d,
    propertyName: _0x39ccc6,
  } = _0x3949a9[_0x53f398(0xb0)];
  try {
    const _0x45b45a = await stripe[_0x53f398(0xa0)][_0x53f398(0x9e)]({
      amount: _0x2b73aa * 0x64,
      currency: _0x5511aa || _0x53f398(0xae),
      payment_method_types: _0x4e806d,
      description: _0x53f398(0xab),
      metadata: { propertyName: JSON[_0x53f398(0xac)](_0x39ccc6) },
    });
    _0x2d6ebb["json"]({ clientSecret: _0x45b45a[_0x53f398(0xa9)] });
  } catch (_0x49eb97) {
    _0x2d6ebb[_0x53f398(0x95)](0x1f4)[_0x53f398(0x91)]({
      error: _0x49eb97[_0x53f398(0xa2)],
    }),
      console["log"](_0x49eb97);
  }
}),
  (exports[_0x1d4d01(0xb3)] = async (_0x11e9be, _0x44a446) => {
    const _0x488e2b = _0x1d4d01;
    try {
      if (!_0x11e9be[_0x488e2b(0xa3)]) throw new Error(_0x488e2b(0x97));
      const {
          property: _0x994d8d,
          price: _0x316139,
          guests: _0x1e3b30,
          fromDate: _0x22c2d4,
          toDate: _0x434266,
        } = _0x11e9be[_0x488e2b(0xb0)],
        _0x2bee73 = moment(_0x22c2d4),
        _0x4cf81a = moment(_0x434266),
        _0x1c6345 = _0x4cf81a["diff"](_0x2bee73, _0x488e2b(0x8f)),
        _0x4faebf = await Property[_0x488e2b(0x8d)](_0x994d8d),
        _0x5d9800 = _0x4faebf[_0x488e2b(0xb5)][_0x488e2b(0x9d)]((_0x3addca) => {
          const _0x3412bd = _0x488e2b;
          return (
            (_0x3addca["fromDate"] <= new Date(_0x22c2d4) &&
              new Date(_0x22c2d4) <= _0x3addca[_0x3412bd(0xb1)]) ||
            (_0x3addca[_0x3412bd(0xb6)] <= new Date(_0x434266) &&
              new Date(_0x434266) <= _0x3addca[_0x3412bd(0xb1)])
          );
        });
      if (_0x5d9800)
        return _0x44a446["status"](0x190)[_0x488e2b(0x91)]({
          status: _0x488e2b(0xa5),
          message: _0x488e2b(0xaf),
        });
      const _0x53cc23 = await Booking[_0x488e2b(0x9e)]({
          property: _0x994d8d,
          price: _0x316139,
          guests: _0x1e3b30,
          fromDate: _0x22c2d4,
          toDate: _0x434266,
          numberOfnights: _0x1c6345,
          user: _0x11e9be["user"]["_id"],
        }),
        _0x431189 = await Property[_0x488e2b(0x9a)](
          _0x994d8d,
          {
            $push: {
              currentBookings: {
                bookingId: _0x53cc23["id"],
                fromDate: _0x22c2d4,
                toDate: _0x434266,
                userId: _0x53cc23[_0x488e2b(0xa3)],
              },
            },
          },
          { new: !![] }
        );
      _0x44a446["status"](0xc8)[_0x488e2b(0x91)]({
        status: _0x488e2b(0x99),
        data: { booking: _0x53cc23, updatedProperty: _0x431189 },
      });
    } catch (_0x337bc2) {
      _0x44a446[_0x488e2b(0x95)](0x191)["json"]({
        status: _0x488e2b(0xa5),
        message: _0x337bc2[_0x488e2b(0xa2)],
      });
    }
  }),
  (exports[_0x1d4d01(0xa8)] = async (_0x4f9baa, _0x56b08a) => {
    const _0x444eac = _0x1d4d01;
    try {
      const _0x18bee8 = await Booking["find"]({
        user: _0x4f9baa[_0x444eac(0xa3)]["_id"],
      });
      _0x56b08a[_0x444eac(0x95)](0xc8)[_0x444eac(0x91)]({
        status: _0x444eac(0x99),
        data: { bookings: _0x18bee8 },
      });
    } catch (_0x569356) {
      _0x56b08a[_0x444eac(0x95)](0x191)["json"]({
        status: _0x444eac(0xa5),
        message: _0x569356[_0x444eac(0xa2)],
      });
    }
  }),
  (exports[_0x1d4d01(0x8c)] = async (_0x30084e, _0x26b047) => {
    const _0x54e8fe = _0x1d4d01;
    try {
      const _0x5088c1 = await Booking[_0x54e8fe(0x8d)](
        _0x30084e[_0x54e8fe(0xa4)][_0x54e8fe(0xb7)]
      );
      _0x26b047[_0x54e8fe(0x95)](0xc8)[_0x54e8fe(0x91)]({
        status: _0x54e8fe(0x99),
        data: { bookings: _0x5088c1 },
      });
    } catch (_0x26e16b) {
      _0x26b047["status"](0x191)["json"]({
        status: "fail",
        message: _0x26e16b[_0x54e8fe(0xa2)],
      });
    }
  });
