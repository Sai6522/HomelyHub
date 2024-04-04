function _0x503e() {
  const _0x4d82cb = [
    "../controllers/authController",
    "16056KYrNBw",
    "getUserBookings",
    "/myAccommodation",
    "21030LYduCV",
    "protect",
    "2996034kvBXRi",
    "route",
    "365680XILLol",
    "login",
    "1864mJgNtR",
    "/login",
    "Router",
    "../controllers/propertyController",
    "/forgotPassword",
    "exports",
    "/me",
    "/updateMyPassword",
    "get",
    "2505258sDScHO",
    "5315427DnFpkM",
    "getUserLogins",
    "26595NvJkby",
    "/logout",
    "signup",
    "patch",
    "post",
    "659122yrHomZ",
    "getBookingDetails",
    "/booking",
    "/signup",
    "/resetPassword/:token",
    "forgotPassword",
    "../controllers/bookingController",
    "/booking/new",
    "/checkout-session",
    "updatePassword",
    "express",
    "logout",
  ];
  _0x503e = function () {
    return _0x4d82cb;
  };
  return _0x503e();
}
function _0x4947(_0x193626, _0x4fc67a) {
  const _0x503e41 = _0x503e();
  return (
    (_0x4947 = function (_0x494794, _0xc50499) {
      _0x494794 = _0x494794 - 0x1e1;
      let _0x3be852 = _0x503e41[_0x494794];
      return _0x3be852;
    }),
    _0x4947(_0x193626, _0x4fc67a)
  );
}
const _0x4bd5d6 = _0x4947;
(function (_0x364c10, _0x1e0ed8) {
  const _0x38c9df = _0x4947,
    _0x29aad7 = _0x364c10();
  while (!![]) {
    try {
      const _0xb77f0d =
        parseInt(_0x38c9df(0x1f7)) / 0x1 +
        -parseInt(_0x38c9df(0x1e2)) / 0x2 +
        -parseInt(_0x38c9df(0x1f0)) / 0x3 +
        (parseInt(_0x38c9df(0x1e6)) / 0x4) *
          (-parseInt(_0x38c9df(0x207)) / 0x5) +
        -parseInt(_0x38c9df(0x1ef)) / 0x6 +
        parseInt(_0x38c9df(0x1e4)) / 0x7 +
        (parseInt(_0x38c9df(0x204)) / 0x8) * (parseInt(_0x38c9df(0x1f2)) / 0x9);
      if (_0xb77f0d === _0x1e0ed8) break;
      else _0x29aad7["push"](_0x29aad7["shift"]());
    } catch (_0x420376) {
      _0x29aad7["push"](_0x29aad7["shift"]());
    }
  }
})(_0x503e, 0xf2d7a);
const express = require(_0x4bd5d6(0x201)),
  authController = require(_0x4bd5d6(0x203)),
  bookingController = require(_0x4bd5d6(0x1fd)),
  propertyController = require(_0x4bd5d6(0x1e9)),
  router = express[_0x4bd5d6(0x1e8)]();
router[_0x4bd5d6(0x1e3)]("/newAccommodation")[_0x4bd5d6(0x1f6)](
  authController[_0x4bd5d6(0x1e1)],
  propertyController["createProperty"]
),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x1e7))[_0x4bd5d6(0x1f6)](
    authController[_0x4bd5d6(0x1e5)]
  ),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x1fa))["post"](
    authController[_0x4bd5d6(0x1f4)]
  ),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x1ec))["get"](
    authController["protect"],
    authController[_0x4bd5d6(0x1f1)]
  ),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x1f3))[_0x4bd5d6(0x1ee)](
    authController[_0x4bd5d6(0x202)]
  ),
  router["route"]("/updateMe")[_0x4bd5d6(0x1f5)](
    authController[_0x4bd5d6(0x1e1)],
    authController["updateMe"]
  ),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x1ed))[_0x4bd5d6(0x1f5)](
    authController[_0x4bd5d6(0x1e1)],
    authController[_0x4bd5d6(0x200)]
  ),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x1ea))[_0x4bd5d6(0x1f6)](
    authController[_0x4bd5d6(0x1fc)]
  ),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x1fb))[_0x4bd5d6(0x1f5)](
    authController["resetPassword"]
  ),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x1ff))[_0x4bd5d6(0x1f6)](
    authController["protect"],
    bookingController["getcheckOutSession"]
  ),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x1f9))["get"](
    authController[_0x4bd5d6(0x1e1)],
    bookingController[_0x4bd5d6(0x205)]
  ),
  router[_0x4bd5d6(0x1e3)]("/booking/:bookingId")[_0x4bd5d6(0x1ee)](
    authController["protect"],
    bookingController[_0x4bd5d6(0x1f8)]
  ),
  router["route"](_0x4bd5d6(0x1fe))[_0x4bd5d6(0x1f6)](
    authController[_0x4bd5d6(0x1e1)],
    bookingController["createBookings"]
  ),
  router[_0x4bd5d6(0x1e3)](_0x4bd5d6(0x206))[_0x4bd5d6(0x1ee)](
    authController[_0x4bd5d6(0x1e1)],
    propertyController["getUsersProperties"]
  ),
  (module[_0x4bd5d6(0x1eb)] = router);
