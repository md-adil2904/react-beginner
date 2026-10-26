"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type inference and annotation
let a = "90";
a = "pol";
console.log(a);
// primitive data types
// string,
// number,
// boolean,
// undefined,
// symbol,
// bigint
// array
// - any , never, unknown
let arr = [3, 67, "pol", true, 45];
let arr1 = ["oops", "cpp", "java"];
let data = [{ name: "pol" }, { name: "pol" }, { name: "pol" }];
// tuples
let arr2 = [23, 4, "oops", true];
let data1 = [
    { name: "pol" },
    { name: "pol" },
    { name: "pol" },
];
// enums - options
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.USER;
// union types
let b = "poll";
b = 90;
let status = "success";
//# sourceMappingURL=index.js.map