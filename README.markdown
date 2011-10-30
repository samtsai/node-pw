pw
==

Password prompts for node.

example
=======

pw.js

``` js
var pw = require('pw');

process.stdout.write('Password: ');
pw(function (password) {
    console.log('password=' + password);
})
```

output:

```
$ node pw.js
Password: *****
password=money
$
```

methods
=======

var pw = require('pw');

pw(sep='*', stream=process.stdin, cb)
---------------

Prompt for a password on `stream`, placing the string `sep` for each key the
user types in.

Use `''` for `sep` to not show any characters.

license
=======

MIT/X11

install
=======

With [npm](http://npmjs.org) do:

    npm install pw
