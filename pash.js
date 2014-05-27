var crypto = require("crypto");

var pash = function (password, salt, callback) {
    "use strict";
    if (!password) {
        throw "No password supplied";
    }
    if (!salt) {
        throw "No salt supplied";
    }
    return crypto.pbkdf2(password, salt, 10000, 64, complete.bind(null, callback));
};

var complete = function (callback, error, key) {
    if (typeof (callback) === "function") {
        if (error) {
            return callback(error);
        }
        return callback(new Buffer(key));
    }
};

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = pash;
}
