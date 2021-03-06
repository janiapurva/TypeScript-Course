// you can also define return  type after closing round bracket by : and data type return. You should always allow type script to define rather than explict define
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// if function not returning anything you can explict defire void or TypeScript is automatically define for you
function minus(n1: number, n2: number): void {
  console.log(n1 + n2);
}

// you can define function to varible and define by explicitley  but problem is that you can assign any type of function because we are telling TypeScript is only accepting fucntion.
let combineValue: Function;
combineValue = add;

// you can define  specific type by defining fucntion parameter by type and  return value
let combo: (a: number, b: number) => number;

// Types and callbacks. You can define call backs type
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
