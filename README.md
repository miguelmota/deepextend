# deepextend

Deep object extending, with currying.

# Install

```bash
npm install deepextend
```

# Usage

```javascript
var deepExtend = require('deepextend');

var obj1 = {
    a: 'A',
    b: /foo/,
    d: {
        a: false,
        b: [2,3],
        c: {foo: 'bar'}
    },
    e: function() { return 1; },
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

console.log(obj4);

{
  a: 'Z',
  b: /foo/,
  d: {
    a: true,
    b: {
      n: ['x','y']
    },
    c: {foo: 'bar'}
  },
  e: function() { return 1; },
  f: 'qux',
  g: ['a','b'],
  h: 'baz'
}
```

# License

MIT
