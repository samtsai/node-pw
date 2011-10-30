var pw = require('pw');

process.stdout.write('Password: ');
pw(function (password) {
    console.log('password=' + password);
})
