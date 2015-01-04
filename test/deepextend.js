var test = require('tape');
var deepExtend = require('../deepextend');

test('deepextend', function (t) {
  t.plan(2);

  var obj1 = {
      a: 'A',
      b: /foo/,
      d: {
          a: false,
          b: [2,3],
          c: {foo: 'bar'}
      },
      e: function() { return 1; }.toString(),
      g: [8,9]
  };

  var obj2 = {
    a: 'Z',
    d: {
      b: {
        n: ['x','y']
      }
    },
    f: 'qux',
    g: ['a','b']
  };

  var obj3 = {
    h: 'baz',
    d: {
      a: true
    }
  };

  var obj4 = deepExtend(obj1, obj2, obj3);

  var expected = {
    a: 'Z',
    b: /foo/,
    d: {
      a: true,
      b: {
        n: ['x','y']
      },
      c: {foo: 'bar'}
    },
    e: function() { return 1; }.toString(),
    f: 'qux',
    g: ['a','b'],
    h: 'baz'
  };

  t.notDeepEqual(obj1, expected);
  t.deepEqual(obj4, expected);

});
