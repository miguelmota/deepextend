(function(root) {

  function isObject(v) {
    if (!v) return false;
    return (v).toString() === '[object Object]';
  }

  function deepExtend(/* obj1, obj2.. */) {
    var args = [].slice.call(arguments);
    var ret = {};

    function dExtend(obj1, obj2) {
      for (var key in obj2) if (obj2.hasOwnProperty(key)) {

          if (isObject(obj2[key])) {
            if (isObject(obj1[key])) {
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


    for (var i = 0; i < args.length; i++) {
      if (!isObject(args[i])) {
        throw new TypeError('argument "' + args[i] + '" must be an object.');
      }
      ret = dExtend((i===0?{}:ret), args[i]);
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
