type UserObj = {
  name : string,
  age : number,
  college : string,
  address : {
    street : string,
    city : string,
    state : string
  },
  studentID ?: string
}

let userObj : UserObj = {
  name : "adil",
  age : 21,
  college : "IET",
  address : {
    street : "chauraha",
    city : "lucknow",
    state : "up"
  }
}

let fun = ( a : number,  b : number) : number=> {
  return a + b;
  
}

console.log(fun(5,4))


// rest operator

let sum = (...rest : number[]) : number => {
  return rest.reduce((total,a)=> total + a,0);
}

let res = sum(1,2,3,4,5);
console.log(res);