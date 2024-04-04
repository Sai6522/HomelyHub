const _0x350356 = _0x45ec;
function _0x17cf() {
  const _0x15adbf = [
    "city",
    "search",
    "10xYLXGv",
    "minPrice",
    "skip",
    "2628648XPBhfS",
    "replaceAll",
    "652DwmPCx",
    "split",
    "maxPrice",
    "paginate",
    "exports",
    "565ATGWJC",
    "propertyType",
    "6301092IhsbpJ",
    "5752359HydCRw",
    "price",
    "2691486xZAAUk",
    "trim",
    "amenities.name",
    "query",
    "1602712ivcCWY",
    "roomType",
    "includes",
    "limit",
    "queryString",
    "dateIn",
    "dateOut",
    "toLowerCase",
    "page",
    "filter",
    "7536CGNITJ",
    "find",
    "1312hPhxyn",
    "amenities",
    "guests",
  ];
  _0x17cf = function () {
    return _0x15adbf;
  };
  return _0x17cf();
}
(function (_0x4ebe0e, _0x21f494) {
  const _0x56498b = _0x45ec,
    _0x506f57 = _0x4ebe0e();
  while (!![]) {
    try {
      const _0x494757 =
        (parseInt(_0x56498b(0x117)) / 0x1) *
          (parseInt(_0x56498b(0x10d)) / 0x2) +
        parseInt(_0x56498b(0x121)) / 0x3 +
        -parseInt(_0x56498b(0x101)) / 0x4 +
        (parseInt(_0x56498b(0x11c)) / 0x5) *
          (-parseInt(_0x56498b(0x10b)) / 0x6) +
        parseInt(_0x56498b(0x11e)) / 0x7 +
        -parseInt(_0x56498b(0x115)) / 0x8 +
        (-parseInt(_0x56498b(0x11f)) / 0x9) *
          (parseInt(_0x56498b(0x112)) / 0xa);
      if (_0x494757 === _0x21f494) break;
      else _0x506f57["push"](_0x506f57["shift"]());
    } catch (_0x5b3df8) {
      _0x506f57["push"](_0x506f57["shift"]());
    }
  }
})(_0x17cf, 0xae7c4);
class APIFeatures {
  constructor(_0xc21502, _0x10e215) {
    const _0x3d2abe = _0x45ec;
    (this[_0x3d2abe(0x124)] = _0xc21502), (this["queryString"] = _0x10e215);
  }
  [_0x350356(0x10a)]() {
    const _0xca4cdf = _0x350356;
    let _0x3e19f9 = {},
      _0x21ca58 = { ...this[_0xca4cdf(0x105)] };
    _0x21ca58[_0xca4cdf(0x113)] &&
      _0x21ca58["maxPrice"] &&
      (_0x21ca58[_0xca4cdf(0x119)][_0xca4cdf(0x103)](">")
        ? (_0x3e19f9[_0xca4cdf(0x120)] = { $gte: _0x21ca58[_0xca4cdf(0x113)] })
        : (_0x3e19f9[_0xca4cdf(0x120)] = {
            $gte: _0x21ca58[_0xca4cdf(0x113)],
            $lte: _0x21ca58[_0xca4cdf(0x119)],
          }));
    if (_0x21ca58["propertyType"]) {
      let _0x63c61d = _0x21ca58[_0xca4cdf(0x11d)]
        [_0xca4cdf(0x118)](",")
        ["map"]((_0x63a2c0) => _0x63a2c0[_0xca4cdf(0x122)]());
      _0x3e19f9[_0xca4cdf(0x11d)] = { $in: _0x63c61d };
    }
    return (
      _0x21ca58[_0xca4cdf(0x102)] &&
        (_0x3e19f9[_0xca4cdf(0x102)] = _0x21ca58[_0xca4cdf(0x102)]),
      _0x21ca58[_0xca4cdf(0x10e)] &&
        (_0x3e19f9[_0xca4cdf(0x123)] = { $all: _0x21ca58[_0xca4cdf(0x10e)] }),
      (this["query"] = this[_0xca4cdf(0x124)][_0xca4cdf(0x10c)](_0x3e19f9)),
      this
    );
  }
  [_0x350356(0x111)]() {
    const _0x3876cd = _0x350356;
    let _0x459b95 = {},
      _0x26862c = { ...this[_0x3876cd(0x105)] };
    return (
      (_0x459b95 = _0x26862c[_0x3876cd(0x110)]
        ? {
            $or: [
              {
                "address.city": _0x26862c["city"]
                  [_0x3876cd(0x108)]()
                  [_0x3876cd(0x116)]("\x20", ""),
              },
              {
                "address.state": _0x26862c[_0x3876cd(0x110)]
                  [_0x3876cd(0x108)]()
                  [_0x3876cd(0x116)]("\x20", ""),
              },
              {
                "address.area": _0x26862c[_0x3876cd(0x110)]
                  [_0x3876cd(0x108)]()
                  ["replaceAll"]("\x20", ""),
              },
            ],
          }
        : {}),
      _0x26862c[_0x3876cd(0x10f)] &&
        ((_0x459b95["maximumGuest"] = { $gte: _0x26862c[_0x3876cd(0x10f)] }),
        _0x26862c[_0x3876cd(0x10f)]),
      _0x26862c[_0x3876cd(0x106)] &&
        _0x26862c["dateOut"] &&
        (_0x459b95["$and"] = [
          {
            currentBookings: {
              $not: {
                $elemMatch: {
                  $or: [
                    {
                      fromDate: { $lt: _0x26862c[_0x3876cd(0x107)] },
                      toDate: { $gt: _0x26862c["dateIn"] },
                    },
                    {
                      fromDate: { $lt: _0x26862c[_0x3876cd(0x106)] },
                      toDate: { $gt: _0x26862c["dateIn"] },
                    },
                  ],
                },
              },
            },
          },
        ]),
      (this[_0x3876cd(0x124)] =
        this[_0x3876cd(0x124)][_0x3876cd(0x10c)](_0x459b95)),
      this
    );
  }
  [_0x350356(0x11a)]() {
    const _0x205ead = _0x350356;
    let _0x17f740 = this[_0x205ead(0x105)][_0x205ead(0x109)] * 0x1 || 0x1,
      _0x2d1a47 = this[_0x205ead(0x105)][_0x205ead(0x104)] * 0x1 || 0xc,
      _0x6abd26 = (_0x17f740 - 0x1) * _0x2d1a47;
    return (
      (this[_0x205ead(0x124)] = this["query"]
        [_0x205ead(0x114)](_0x6abd26)
        [_0x205ead(0x104)](_0x2d1a47)),
      this
    );
  }
}
function _0x45ec(_0x22b4ea, _0x222345) {
  const _0x17cf59 = _0x17cf();
  return (
    (_0x45ec = function (_0x45ec9e, _0x4ed644) {
      _0x45ec9e = _0x45ec9e - 0x101;
      let _0x1ac61f = _0x17cf59[_0x45ec9e];
      return _0x1ac61f;
    }),
    _0x45ec(_0x22b4ea, _0x222345)
  );
}
module[_0x350356(0x11b)] = APIFeatures;
