function maxProfit (input) {
  let profit = 0;
  if(input.length > 0) {
    for (var i = 1; i < input.length; i++) {
      profit = input[i] - input[0];
      if(profit > -1) {
        console.log('$',input[i], '- $', input[0], '= $', profit);
      } else {
        console.log('$',input[i], '- $', input[0], '= -1');
      }
    }
    input.shift();

    maxProfit(input);
  }
}

maxProfit([45, 24, 35, 31, 40, 38, 11]);