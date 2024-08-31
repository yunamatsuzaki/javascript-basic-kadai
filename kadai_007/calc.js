// 変数numにランダムな整数を代入する
let num = 15;

// 変数numの値が3と5の倍数の場合
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

// 変数numの値が3の倍数の場合
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

else if (num % 5 === 0) {
  console.log('5の倍数です');
}

// それ以外のときは、変数(num)を出力する
else {
  console.log(num);
}
