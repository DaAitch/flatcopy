"use strict";
///<reference path="../typings/globals/lodash/index.d.ts"/>
var _ = require('lodash');
function flatcopy(x) {
    if (!_.isObject(x) || _.isArray(x))
        return {};
    return _.assign({}, x);
}
exports.flatcopy = flatcopy;
function flatarraycopy(x) {
    if (!_.isArray(x))
        return [];
    return _.slice(x);
}
exports.flatarraycopy = flatarraycopy;
//# sourceMappingURL=flatcopy.js.map