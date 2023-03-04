function makeArmy() {
  let shooters = []
  // В старом решении значение i бралось из внешнего лексического окружения,
  // оно сначала доходило до крайних значений,
  // поэтому лучшим способом я посчитал перенести объявление переменной в цикл.
  for(let i = 0; i < 10; i++) {
    let shooter = function() {
      console.log( i )
    }
    shooters.push(shooter)
  }

  return shooters
}

let army = makeArmy()

army[0]()
army[5]()