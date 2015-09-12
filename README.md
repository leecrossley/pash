# pash [![npm version](https://badge.fury.io/js/pash.png)](https://npmjs.org/package/pash)

Simple and strong password hashing using core node crypto.

```
var pash = require("pash");

pash("password", "salt", function (raw) {
    var hash = raw.toString("base64").slice(0, 6);
});
```

Callback will be called with an error, or a derived key buffer.
