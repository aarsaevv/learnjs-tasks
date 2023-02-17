const sumInput = () => {
  let sum = null;
  let numbers = [];
  while (true) {
    let value = prompt("Введите число", 0);

    if (!isFinite(value) || value === "" || value === null) break;
    numbers.push(+value);
  }

  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumInput());