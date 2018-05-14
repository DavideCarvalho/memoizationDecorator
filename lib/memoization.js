"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var memoizedFunctions = {};
var memozation = function (memoizationDuration) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var methodStarted = parseInt(Date.now().toPrecision());
            var methodStartedInMilliseconds = methodStarted;
            var functionMemoizedResult = memoizedFunctions[args];
            if (functionMemoizedResult) {
                if (memoizationDuration) {
                    if (functionMemoizedResult.lastCall) {
                        var timeBetweenThisAndLastCall = functionMemoizedResult.lastCall ? methodStartedInMilliseconds - functionMemoizedResult.lastCall : methodStartedInMilliseconds;
                        if (timeBetweenThisAndLastCall <= memoizationDuration) {
                            console.log('returning inside time window');
                            var newFunctionMemoizedResult = __assign({}, functionMemoizedResult, { lastCall: methodStartedInMilliseconds });
                            return functionMemoizedResult.result;
                        }
                        else {
                            console.log('time window elapsed, making new call');
                            var result_1 = originalMethod.apply(this, args);
                            memoizedFunctions[args] = {
                                lastCall: methodStartedInMilliseconds,
                                result: result_1
                            };
                            return result_1;
                        }
                    }
                }
                return functionMemoizedResult.result;
            }
            var result = checkIfHasDuration(originalMethod, args, methodStartedInMilliseconds, memoizationDuration);
            return result;
        };
        return descriptor;
    };
};
var checkIfHasDuration = function (originalMethod, args, methodStartedInMilliseconds, memoizationDuration) {
    if (memoizationDuration) {
        var result_2 = originalMethod.apply(_this, args);
        memoizedFunctions[args] = {
            lastCall: methodStartedInMilliseconds,
            result: result_2
        };
        return result_2;
    }
    var result = originalMethod.apply(_this, args);
    memoizedFunctions[args] = result;
    return result;
};
exports.default = memozation;
//# sourceMappingURL=memoization.js.map