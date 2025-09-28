for (let i = 1000; i <= 9999; i++) {
  let sixteen = i;
  let sixteenSum = 0;
  while (sixteen != 0) {
    sixteenSum += sixteen % 16;
    sixteen = Math.floor(sixteen / 16);
  }

  let twelve = i;
  let twelveSum = 0;
  while (twelve != 0) {
    twelveSum += twelve % 12;
    twelve = Math.floor(twelve / 12);
  }

  let ten = i;
  let tenSum = 0;
  while (ten != 0) {
    tenSum += ten % 10;
    ten = Math.floor(ten / 10);
  }

  if (sixteenSum === twelveSum && twelveSum === tenSum) {
    console.log(i);
  }
}