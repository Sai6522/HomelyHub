function _0x3684(_0x1dceaa, _0xd99c1f) {
  const _0x1df154 = _0x1df1();
  return (
    (_0x3684 = function (_0x3684c5, _0xbfd262) {
      _0x3684c5 = _0x3684c5 - 0x151;
      let _0x12a6d6 = _0x1df154[_0x3684c5];
      return _0x12a6d6;
    }),
    _0x3684(_0x1dceaa, _0xd99c1f)
  );
}
const _0x2931d4 = _0x3684;
(function (_0x484a48, _0x464f5b) {
  const _0x5b5b6a = _0x3684,
    _0x3d50a2 = _0x484a48();
  while (!![]) {
    try {
      const _0x5e661b =
        -parseInt(_0x5b5b6a(0x159)) / 0x1 +
        -parseInt(_0x5b5b6a(0x165)) / 0x2 +
        (parseInt(_0x5b5b6a(0x161)) / 0x3) *
          (parseInt(_0x5b5b6a(0x15f)) / 0x4) +
        (-parseInt(_0x5b5b6a(0x154)) / 0x5) *
          (parseInt(_0x5b5b6a(0x158)) / 0x6) +
        -parseInt(_0x5b5b6a(0x152)) / 0x7 +
        (-parseInt(_0x5b5b6a(0x16a)) / 0x8) *
          (parseInt(_0x5b5b6a(0x170)) / 0x9) +
        parseInt(_0x5b5b6a(0x15a)) / 0xa;
      if (_0x5e661b === _0x464f5b) break;
      else _0x3d50a2["push"](_0x3d50a2["shift"]());
    } catch (_0x2c5c4d) {
      _0x3d50a2["push"](_0x3d50a2["shift"]());
    }
  }
})(_0x1df1, 0x70232);
const express = require(_0x2931d4(0x155)),
  authController = require(_0x2931d4(0x179)),
  bookingController = require(_0x2931d4(0x171)),
  propertyController = require(_0x2931d4(0x168)),
  router = express["Router"]();
router[_0x2931d4(0x160)]("/newAccommodation")[_0x2931d4(0x16e)](
  authController[_0x2931d4(0x153)],
  propertyController[_0x2931d4(0x15d)]
),
  router[_0x2931d4(0x160)](_0x2931d4(0x176))[_0x2931d4(0x16e)](
    authController[_0x2931d4(0x16c)]
  ),
  router["route"](_0x2931d4(0x16b))[_0x2931d4(0x16e)](
    authController[_0x2931d4(0x173)]
  ),
  router["route"](_0x2931d4(0x162))[_0x2931d4(0x157)](
    authController[_0x2931d4(0x156)]
  ),
  router[_0x2931d4(0x160)](_0x2931d4(0x15c))["get"](
    authController[_0x2931d4(0x163)]
  ),
  router[_0x2931d4(0x160)](_0x2931d4(0x151))[_0x2931d4(0x167)](
    authController[_0x2931d4(0x153)],
    authController[_0x2931d4(0x164)]
  ),
  router[_0x2931d4(0x160)](_0x2931d4(0x16f))[_0x2931d4(0x167)](
    authController[_0x2931d4(0x153)],
    authController[_0x2931d4(0x166)]
  ),
  router[_0x2931d4(0x160)](_0x2931d4(0x174))[_0x2931d4(0x16e)](
    authController["forgotPassword"]
  ),
  router[_0x2931d4(0x160)](_0x2931d4(0x15e))[_0x2931d4(0x167)](
    authController[_0x2931d4(0x15b)]
  ),
  router[_0x2931d4(0x160)](_0x2931d4(0x172))[_0x2931d4(0x16e)](
    authController["protect"],
    bookingController["getcheckOutSession"]
  ),
  router[_0x2931d4(0x160)](_0x2931d4(0x178))[_0x2931d4(0x157)](
    authController[_0x2931d4(0x153)],
    bookingController[_0x2931d4(0x169)]
  ),
  router["route"]("/booking/:bookingId")["get"](
    authController[_0x2931d4(0x153)],
    bookingController["getBookingDetails"]
  ),
  router[_0x2931d4(0x160)](_0x2931d4(0x175))[_0x2931d4(0x16e)](
    authController[_0x2931d4(0x153)],
    bookingController[_0x2931d4(0x177)]
  ),
  router[_0x2931d4(0x160)](_0x2931d4(0x16d))["get"](
    authController["protect"],
    propertyController["getUsersProperties"]
  ),
  (module["exports"] = router);
function _0x1df1() {
  const _0xd74aa5 = [
    "post",
    "/updateMyPassword",
    "1679625WgxYjU",
    "../controllers/bookingController",
    "/checkout-session",
    "signup",
    "/forgotPassword",
    "/booking/new",
    "/login",
    "createBookings",
    "/booking",
    "../controllers/authController",
    "/updateMe",
    "1534792YxEavL",
    "protect",
    "1392030XvquzJ",
    "express",
    "isLoggedIn",
    "get",
    "6xQplJM",
    "171234NJurtl",
    "15960200ozgCzE",
    "resetPassword",
    "/logout",
    "createProperty",
    "/resetPassword/:token",
    "1351608DXgJgz",
    "route",
    "3zLuwor",
    "/me",
    "logout",
    "updateMe",
    "1238174oTwPQD",
    "updatePassword",
    "patch",
    "../controllers/propertyController",
    "getUserBookings",
    "8hHrfXf",
    "/signup",
    "login",
    "/myAccommodation",
  ];
  _0x1df1 = function () {
    return _0xd74aa5;
  };
  return _0x1df1();
}
