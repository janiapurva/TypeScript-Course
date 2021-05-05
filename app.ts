//Union type
//nay where in function where function parameter accept two diffrent kind of data type then use Union data type
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  (typeof input1 === "number" && typeof input2 === "number") ||
  resultConversion === "as-number"
    ? (result = +input1 + +input2)
    : (result = input1.toString() + input2.toString);

  return result;
}

// literal type basically defining argument directly hardcoded value

function combination(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  (typeof input1 === "number" && typeof input2 === "number") ||
  resultConversion === "as-number"
    ? (result = +input1 + +input2)
    : (result = input1.toString() + input2.toString);

  return result;
}
