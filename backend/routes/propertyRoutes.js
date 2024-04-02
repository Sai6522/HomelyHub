function _0x4d89() {
  const _0x4e65bc = [
    "getProperties",
    "/:id",
    "../controllers/propertyController",
    "../controllers/authController",
    "get",
    "44ANwzNk",
    "97896Decinw",
    "843588sZbWbn",
    "1382170RJRqYl",
    "1767808qcxtQM",
    "Router",
    "3543790cikSUN",
    "3093ZxJYgf",
    "273ygouJu",
    "exports",
    "6pusIHO",
    "178292idyeoQ",
    "route",
    "826rfFqeI",
  ];
  _0x4d89 = function () {
    return _0x4e65bc;
  };
  return _0x4d89();
}
const _0x301131 = _0x1aa3;
(function (_0x52548e, _0x58b725) {
  const _0x10c138 = _0x1aa3,
    _0x17013b = _0x52548e();
  while (!![]) {
    try {
      const _0x1f0208 =
        -parseInt(_0x10c138(0x174)) / 0x1 +
        (parseInt(_0x10c138(0x176)) / 0x2) *
          (-parseInt(_0x10c138(0x170)) / 0x3) +
        -parseInt(_0x10c138(0x16d)) / 0x4 +
        (parseInt(_0x10c138(0x16c)) / 0x5) *
          (parseInt(_0x10c138(0x173)) / 0x6) +
        (parseInt(_0x10c138(0x171)) / 0x7) *
          (-parseInt(_0x10c138(0x16a)) / 0x8) +
        parseInt(_0x10c138(0x16b)) / 0x9 +
        (parseInt(_0x10c138(0x16f)) / 0xa) * (parseInt(_0x10c138(0x169)) / 0xb);
      if (_0x1f0208 === _0x58b725) break;
      else _0x17013b["push"](_0x17013b["shift"]());
    } catch (_0x396227) {
      _0x17013b["push"](_0x17013b["shift"]());
    }
  }
})(_0x4d89, 0x408c8);
function _0x1aa3(_0x29b8ce, _0x2fc7f3) {
  const _0x4d894e = _0x4d89();
  return (
    (_0x1aa3 = function (_0x1aa33c, _0x5a5177) {
      _0x1aa33c = _0x1aa33c - 0x164;
      let _0x5cf0ed = _0x4d894e[_0x1aa33c];
      return _0x5cf0ed;
    }),
    _0x1aa3(_0x29b8ce, _0x2fc7f3)
  );
}
const express = require("express"),
  propertyController = require(_0x301131(0x166)),
  authController = require(_0x301131(0x167)),
  router = express[_0x301131(0x16e)]();
router[_0x301131(0x175)]("/")[_0x301131(0x168)](
  propertyController[_0x301131(0x164)]
),
  router[_0x301131(0x175)](_0x301131(0x165))[_0x301131(0x168)](
    propertyController["getProperty"]
  ),
  (module[_0x301131(0x172)] = router);
