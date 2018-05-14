"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoization_1 = __importDefault(require("./memoization"));
describe('memoization decorator', function () {
    it('should only test', function () {
        var Test = /** @class */ (function () {
            function Test() {
            }
            Test.prototype.sum = function (n1, n2) {
                return n1 + n2;
            };
            __decorate([
                memoization_1.default(10),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [Number, Number]),
                __metadata("design:returntype", Number)
            ], Test.prototype, "sum", null);
            return Test;
        }());
        var teste = new Test();
        teste.sum(1, 1);
        teste.sum(1, 2);
        teste.sum(1, 2);
        teste.sum(1, 2);
        teste.sum(1, 2);
    });
});
//# sourceMappingURL=memoization.test.js.map