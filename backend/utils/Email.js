function _0x2b5b(_0x5eb224, _0x43774d) {
  const _0xe38fbf = _0xe38f();
  return (
    (_0x2b5b = function (_0x2b5ba3, _0x100d39) {
      _0x2b5ba3 = _0x2b5ba3 - 0x1c5;
      let _0x3ab8ee = _0xe38fbf[_0x2b5ba3];
      return _0x3ab8ee;
    }),
    _0x2b5b(_0x5eb224, _0x43774d)
  );
}
function _0xe38f() {
  const _0x4610f1 = [
    "120rWXLur",
    "production",
    "NODE_ENV",
    "3851784XXjXTd",
    "EMAIL_PASSWORD",
    "2171420okkdBf",
    "233765QLTJbK",
    "4ClNnBG",
    "env",
    "EMAIL_PORT",
    "EMAIL_FROM",
    "exports",
    "setApiKey",
    "845199fTGsiK",
    "email",
    "91oYunAS",
    "send",
    "40012puTolD",
    "createTransport",
    "SENDGRID_EMAIL",
    "8PezQTS",
    "SENDGRID_API_KEY",
    "@sendgrid/mail",
    "log",
    "error",
    "Email\x20sent\x20successfully!",
    "1300266QALfDb",
    "Error\x20sending\x20email:",
    "6632axAFFr",
    "11iByxBI",
    "message",
  ];
  _0xe38f = function () {
    return _0x4610f1;
  };
  return _0xe38f();
}
const _0x54302b = _0x2b5b;
(function (_0xc5d504, _0x28949b) {
  const _0x3ebd69 = _0x2b5b,
    _0x12bf66 = _0xc5d504();
  while (!![]) {
    try {
      const _0x5aa9a =
        (-parseInt(_0x3ebd69(0x1c9)) / 0x1) *
          (-parseInt(_0x3ebd69(0x1d6)) / 0x2) +
        parseInt(_0x3ebd69(0x1c7)) / 0x3 +
        (parseInt(_0x3ebd69(0x1e0)) / 0x4) *
          (-parseInt(_0x3ebd69(0x1df)) / 0x5) +
        (parseInt(_0x3ebd69(0x1d9)) / 0x6) *
          (-parseInt(_0x3ebd69(0x1cb)) / 0x7) +
        (parseInt(_0x3ebd69(0x1ce)) / 0x8) *
          (-parseInt(_0x3ebd69(0x1d4)) / 0x9) +
        (parseInt(_0x3ebd69(0x1de)) / 0xa) *
          (parseInt(_0x3ebd69(0x1d7)) / 0xb) +
        -parseInt(_0x3ebd69(0x1dc)) / 0xc;
      if (_0x5aa9a === _0x28949b) break;
      else _0x12bf66["push"](_0x12bf66["shift"]());
    } catch (_0x111199) {
      _0x12bf66["push"](_0x12bf66["shift"]());
    }
  }
})(_0xe38f, 0x2a816);
const nodemailer = require("nodemailer"),
  sendGridMail = require(_0x54302b(0x1d0));
sendGridMail[_0x54302b(0x1c6)](process[_0x54302b(0x1e1)][_0x54302b(0x1cf)]);
const sendEmail = async (_0x3b5bdb) => {
  const _0x4383c2 = _0x54302b,
    _0x234827 = {
      from:
        process["env"][_0x4383c2(0x1db)] === _0x4383c2(0x1da)
          ? {
              name: "Homly\x20hub",
              email: process[_0x4383c2(0x1e1)][_0x4383c2(0x1cd)],
            }
          : process[_0x4383c2(0x1e1)][_0x4383c2(0x1e3)],
      to: _0x3b5bdb[_0x4383c2(0x1c8)],
      subject: _0x3b5bdb["subject"],
      html: _0x3b5bdb[_0x4383c2(0x1d8)],
    };
  if (process["env"][_0x4383c2(0x1db)] === "production")
    try {
      await sendGridMail[_0x4383c2(0x1ca)](_0x234827),
        console[_0x4383c2(0x1d1)](_0x4383c2(0x1d3));
    } catch (_0x48bf81) {
      console[_0x4383c2(0x1d2)](_0x4383c2(0x1d5), _0x48bf81);
    }
  const _0x471ca2 = nodemailer[_0x4383c2(0x1cc)]({
    host: process[_0x4383c2(0x1e1)]["EMAIL_HOST"],
    port: process["env"][_0x4383c2(0x1e2)],
    auth: {
      user: process["env"]["EMAIL_USERNAME"],
      pass: process[_0x4383c2(0x1e1)][_0x4383c2(0x1dd)],
    },
  });
  await _0x471ca2["sendMail"](_0x234827);
};
module[_0x54302b(0x1c5)] = sendEmail;
