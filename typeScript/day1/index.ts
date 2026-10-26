// type inference and annotation
let a: string = "90";

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

let arr: any[] = [3, 67, "pol", true, 45];

let arr1: string[] = ["oops", "cpp", "java"];

let data: any[] = [{ name: "pol" }, { name: "pol" }, { name: "pol" }];
// tuples

let arr2: [number, number, string, boolean] = [23, 4, "oops", true];

let data1: [{ name: string }, { name: string }, { name: string }] = [
  { name: "pol" },
  { name: "pol" },
  { name: "pol" },
];

// enums - options

enum Role {
  ADMIN,
  SUP_ADMIN,
  USER
}

let role : Role = Role.USER;

// union types

let b : string | number = "poll"

b = 90

// literal types - khudka type hai

type Status = 'pending' | 'error' | 'success';

let status : Status = "success"

