//1c, 5c, 10c, 25c, 50c, and $1

console.log(getChange(3.14, 1.99));

function getChange(M, P) {
  let changeTobeReturned = (M - P).toFixed(2);
  let changeAvailabe = [
    { name: "1c", value: 1 },
    { name: "5c", value: 5 },
    { name: "10c", value: 10 },
    { name: "25c", value: 25 },
    { name: "50c", value: 50 },
    { name: "1d", value: 1 },
  ];

  let returnValue = {
    dollars: 0.0,
    fCent: 0.0,
    tfCent: 0.0,
    tenCent: 0.0,
    fvCent: 0.0,
    oneCent: 0.0,
  };
  while (changeTobeReturned > 0) {
    console.log(changeTobeReturned);
    if (changeTobeReturned > 1) {
      changeTobeReturned = changeTobeReturned - 1;
      returnValue.dollars = returnValue.dollars + 1;
    } else if (changeTobeReturned < 1 && changeTobeReturned > 0.49) {
      changeTobeReturned = changeTobeReturned - 0.5;
      returnValue.fCent = returnValue.fCent + 1;
    } else if (changeTobeReturned < 0.5 && changeTobeReturned > 0.24) {
      changeTobeReturned = changeTobeReturned - 0.25;
      returnValue.tfCent = returnValue.tfCent + 1;
    } else if (changeTobeReturned < 0.25 && changeTobeReturned > 0.09) {
      changeTobeReturned = changeTobeReturned - 0.1;
      returnValue.tenCent = returnValue.tenCent + 1;
    } else if (changeTobeReturned < 0.1 && changeTobeReturned > 0.04) {
      changeTobeReturned = changeTobeReturned - 0.05;
      returnValue.fvCent = returnValue.fvCent + 1;
    } else {
      changeTobeReturned = changeTobeReturned - 0.01;
      returnValue.oneCent = returnValue.oneCent + 1;
    }
  }

  console.table(returnValue);
}
