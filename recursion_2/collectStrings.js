function collectStrings(obj) {
  const strs = [];
  const helperFn = (val) => {
    Object.keys(val).forEach((key) => {
      if (typeof val[key] === 'string') {
        strs.push(val[key]);
      } else if (typeof val[key] === 'object' && !Array.isArray(val[key])) {
        helperFn(val[key]);
      } else {
        strs.push(...val[key]);
      }
    });
  };

  helperFn(obj);
  return strs;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
            lastArr: ["new", "thing"]
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz", "new", "thing"])
