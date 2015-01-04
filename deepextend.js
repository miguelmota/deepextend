(function(root) {

  function deepExtend(/* obj1, obj2.. */) {
    var args = [].slice.call(arguments);
    var ret;

    function dExtend(obj1, obj2) {
      for (var key in obj2) if (obj2.hasOwnProperty(key)) {

          if ((obj2[key]||'').toString() === '[object Object]') {
            if ((obj1[key]||'').toString() === '[object Object]') {
              dExtend(obj1[key], obj2[key]);
            } else {
              obj1[key] = obj2[key];
            }
          } else if (Array.isArray(obj2[key])) {
            if (Array.isArray(obj1[key])) {
              dExtend(obj1[key], obj2[key]);
            } else {
              obj1[key] = obj2[key];
            }
          } else {
            obj1[key] = obj2[key];
          }

      }

      return obj1;
    }

    ret = dExtend(dExtend({}, args[0]), args[1]);

    for (var i = 1; i < args.length; i++) {
      ret = dExtend(ret, args[i]);
    }

    return ret;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = deepExtend;
    }
    exports.deepExtend = deepExtend;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return deepExtend;
    });
  } else {
    root.deepExtend = deepExtend;
  }

})(this);
