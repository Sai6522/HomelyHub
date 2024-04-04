const _0x3dd50c = _0x13da;
function _0x13da(_0x410b92, _0x3d6b70) {
  const _0x219e6b = _0x219e();
  return (
    (_0x13da = function (_0x13dabb, _0x4e73e2) {
      _0x13dabb = _0x13dabb - 0x1de;
      let _0x2b8ac4 = _0x219e6b[_0x13dabb];
      return _0x2b8ac4;
    }),
    _0x13da(_0x410b92, _0x3d6b70)
  );
}
(function (_0x55c88d, _0x3ae12) {
  const _0x117430 = _0x13da,
    _0x5e8728 = _0x55c88d();
  while (!![]) {
    try {
      const _0xa953bd =
        (-parseInt(_0x117430(0x1e8)) / 0x1) *
          (parseInt(_0x117430(0x1ef)) / 0x2) +
        (parseInt(_0x117430(0x1ec)) / 0x3) *
          (-parseInt(_0x117430(0x1f6)) / 0x4) +
        (parseInt(_0x117430(0x1ee)) / 0x5) *
          (parseInt(_0x117430(0x1e4)) / 0x6) +
        parseInt(_0x117430(0x1f4)) / 0x7 +
        -parseInt(_0x117430(0x1f1)) / 0x8 +
        (-parseInt(_0x117430(0x1f7)) / 0x9) *
          (parseInt(_0x117430(0x1f8)) / 0xa) +
        (parseInt(_0x117430(0x1e2)) / 0xb) * (parseInt(_0x117430(0x1f9)) / 0xc);
      if (_0xa953bd === _0x3ae12) break;
      else _0x5e8728["push"](_0x5e8728["shift"]());
    } catch (_0xf60ea7) {
      _0x5e8728["push"](_0x5e8728["shift"]());
    }
  }
})(_0x219e, 0x4e72a);
const sendGridMail = require(_0x3dd50c(0x1e5));
sendGridMail[_0x3dd50c(0x1e3)](process[_0x3dd50c(0x1ed)][_0x3dd50c(0x1eb)]);
const sendEmail = async (_0x36c15d) => {
  const _0x405461 = _0x3dd50c;
  try {
    const _0x214b53 = _0x2621f1();
    await sendGridMail[_0x405461(0x1e1)](_0x214b53),
      console[_0x405461(0x1e7)](_0x405461(0x1e9));
  } catch (_0x1aa893) {
    console[_0x405461(0x1df)](_0x405461(0x1de), _0x1aa893);
  }
  function _0x2621f1() {
    const _0x3411a1 = _0x405461;
    return {
      to: _0x36c15d[_0x3411a1(0x1e6)],
      from: {
        name: _0x3411a1(0x1f5),
        email: process[_0x3411a1(0x1ed)]["SENDGRID_EMAIL"],
      },
      subject: _0x36c15d[_0x3411a1(0x1e0)],
      text: _0x36c15d[_0x3411a1(0x1f3)],
      html: _0x3411a1(0x1f0) + _0x36c15d[_0x3411a1(0x1f3)] + _0x3411a1(0x1ea),
    };
  }
};
(module["exports"] = sendEmail), (module[_0x3dd50c(0x1f2)] = sendEmail);
function _0x219e() {
  const _0x26c74 = [
    "Error\x20sending\x20email:",
    "error",
    "subject",
    "send",
    "2627438ukWDWr",
    "setApiKey",
    "247248PIktJI",
    "@sendgrid/mail",
    "email",
    "log",
    "33654SEodzN",
    "Email\x20sent\x20successfully!",
    "</strong>",
    "SENDGRID_API_KEY",
    "3gVsCen",
    "env",
    "60YfWhsg",
    "30rkvlGX",
    "<strong>",
    "1330584Jtjxdb",
    "exports",
    "message",
    "1150226KLTsbc",
    "Homly\x20hub",
    "528692Rkjlcw",
    "4869JOBAvW",
    "220wIztDl",
    "24PykdLM",
  ];
  _0x219e = function () {
    return _0x26c74;
  };
  return _0x219e();
}
