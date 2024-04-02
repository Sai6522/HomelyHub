const _0x534bc5 = _0x3e47;
(function (_0x263980, _0x339725) {
  const _0x408129 = _0x3e47,
    _0x868aa7 = _0x263980();
  while (!![]) {
    try {
      const _0x12fb47 =
        (parseInt(_0x408129(0x71)) / 0x1) * (parseInt(_0x408129(0x88)) / 0x2) +
        -parseInt(_0x408129(0x8d)) / 0x3 +
        -parseInt(_0x408129(0x74)) / 0x4 +
        (parseInt(_0x408129(0x7f)) / 0x5) * (-parseInt(_0x408129(0x84)) / 0x6) +
        -parseInt(_0x408129(0x72)) / 0x7 +
        parseInt(_0x408129(0x80)) / 0x8 +
        parseInt(_0x408129(0x79)) / 0x9;
      if (_0x12fb47 === _0x339725) break;
      else _0x868aa7["push"](_0x868aa7["shift"]());
    } catch (_0x9d81b2) {
      _0x868aa7["push"](_0x868aa7["shift"]());
    }
  }
})(_0x2beb, 0xedbbf);
class APIFeatures {
  constructor(_0x37a67d, _0x3aab57) {
    (this["query"] = _0x37a67d), (this["queryString"] = _0x3aab57);
  }
  [_0x534bc5(0x7c)]() {
    const _0x3b7143 = _0x534bc5;
    let _0x428d55 = {},
      _0x3feb6e = { ...this[_0x3b7143(0x89)] };
    _0x3feb6e[_0x3b7143(0x87)] &&
      _0x3feb6e[_0x3b7143(0x7d)] &&
      (_0x3feb6e[_0x3b7143(0x7d)][_0x3b7143(0x76)](">")
        ? (_0x428d55[_0x3b7143(0x73)] = { $gte: _0x3feb6e[_0x3b7143(0x87)] })
        : (_0x428d55[_0x3b7143(0x73)] = {
            $gte: _0x3feb6e[_0x3b7143(0x87)],
            $lte: _0x3feb6e[_0x3b7143(0x7d)],
          }));
    if (_0x3feb6e[_0x3b7143(0x8c)]) {
      let _0x445ddc = _0x3feb6e["propertyType"]
        [_0x3b7143(0x85)](",")
        ["map"]((_0x3c910a) => _0x3c910a["trim"]());
      _0x428d55[_0x3b7143(0x8c)] = { $in: _0x445ddc };
    }
    return (
      _0x3feb6e[_0x3b7143(0x8e)] &&
        (_0x428d55[_0x3b7143(0x8e)] = _0x3feb6e[_0x3b7143(0x8e)]),
      _0x3feb6e[_0x3b7143(0x8b)] &&
        (_0x428d55[_0x3b7143(0x81)] = { $all: _0x3feb6e[_0x3b7143(0x8b)] }),
      (this[_0x3b7143(0x8a)] =
        this[_0x3b7143(0x8a)][_0x3b7143(0x6e)](_0x428d55)),
      this
    );
  }
  ["search"]() {
    const _0x4f9ad0 = _0x534bc5;
    let _0x340bf2 = {},
      _0x6a791e = { ...this[_0x4f9ad0(0x89)] };
    return (
      (_0x340bf2 = _0x6a791e[_0x4f9ad0(0x83)]
        ? {
            $or: [
              {
                "address.city": _0x6a791e[_0x4f9ad0(0x83)]
                  ["toLowerCase"]()
                  [_0x4f9ad0(0x82)]("\x20", ""),
              },
              {
                "address.state": _0x6a791e["city"]
                  [_0x4f9ad0(0x6f)]()
                  ["replaceAll"]("\x20", ""),
              },
              {
                "address.area": _0x6a791e[_0x4f9ad0(0x83)]
                  [_0x4f9ad0(0x6f)]()
                  [_0x4f9ad0(0x82)]("\x20", ""),
              },
            ],
          }
        : {}),
      _0x6a791e[_0x4f9ad0(0x86)] &&
        ((_0x340bf2[_0x4f9ad0(0x6d)] = { $gte: _0x6a791e[_0x4f9ad0(0x86)] }),
        _0x6a791e[_0x4f9ad0(0x86)]),
      _0x6a791e[_0x4f9ad0(0x7b)] &&
        _0x6a791e["dateOut"] &&
        (_0x340bf2[_0x4f9ad0(0x7a)] = [
          {
            currentBookings: {
              $not: {
                $elemMatch: {
                  $or: [
                    {
                      fromDate: { $lt: _0x6a791e[_0x4f9ad0(0x77)] },
                      toDate: { $gt: _0x6a791e["dateIn"] },
                    },
                    {
                      fromDate: { $lt: _0x6a791e[_0x4f9ad0(0x7b)] },
                      toDate: { $gt: _0x6a791e[_0x4f9ad0(0x7b)] },
                    },
                  ],
                },
              },
            },
          },
        ]),
      (this[_0x4f9ad0(0x8a)] =
        this[_0x4f9ad0(0x8a)][_0x4f9ad0(0x6e)](_0x340bf2)),
      this
    );
  }
  [_0x534bc5(0x6c)]() {
    const _0x564be7 = _0x534bc5;
    let _0x46f64d = this["queryString"][_0x564be7(0x78)] * 0x1 || 0x1,
      _0x1ff497 = this[_0x564be7(0x89)][_0x564be7(0x70)] * 0x1 || 0xc,
      _0x1cc64c = (_0x46f64d - 0x1) * _0x1ff497;
    return (
      (this[_0x564be7(0x8a)] = this[_0x564be7(0x8a)]
        [_0x564be7(0x7e)](_0x1cc64c)
        ["limit"](_0x1ff497)),
      this
    );
  }
}
function _0x2beb() {
  const _0x188461 = [
    "split",
    "guests",
    "minPrice",
    "326HlyiVB",
    "queryString",
    "query",
    "amenities",
    "propertyType",
    "4048686nHMCYY",
    "roomType",
    "paginate",
    "maximumGuest",
    "find",
    "toLowerCase",
    "limit",
    "2849dNvxTH",
    "11878909RbMKja",
    "price",
    "3999448bMnQGe",
    "exports",
    "includes",
    "dateOut",
    "page",
    "39890286wtyMfB",
    "$and",
    "dateIn",
    "filter",
    "maxPrice",
    "skip",
    "10uasvBY",
    "12997336VnWlRq",
    "amenities.name",
    "replaceAll",
    "city",
    "4503414eNJKjA",
  ];
  _0x2beb = function () {
    return _0x188461;
  };
  return _0x2beb();
}
function _0x3e47(_0x25b43d, _0xb8fd1a) {
  const _0x2beb21 = _0x2beb();
  return (
    (_0x3e47 = function (_0x3e4701, _0x4aee0a) {
      _0x3e4701 = _0x3e4701 - 0x6c;
      let _0x12f103 = _0x2beb21[_0x3e4701];
      return _0x12f103;
    }),
    _0x3e47(_0x25b43d, _0xb8fd1a)
  );
}
module[_0x534bc5(0x75)] = APIFeatures;
