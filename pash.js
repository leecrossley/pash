var crypto = require("crypto");

var pash = function (password, salt, callback) {
    "use strict";
    if (!password) {
        handleError("No password supplied", callback);
    }
    if (!salt) {
        handleError("No salt supplied", callback);
    }
    return crypto.pbkdf2(password, salt, 10000, 64, complete.bind(null, callback));
};

var complete = function (callback, error, key) {
    if (error) {
        handleError(error, callback);
    }
    if (typeof (callback) === "function") {
        return callback(derivedKey);
    }
};

var handleError = function (error, callback) {
    if (typeof (callback) === "function") {
        return callback(error);
    }
    throw error;
};

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = pash;
}
