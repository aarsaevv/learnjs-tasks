let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

const topSalary = salaries => {
  let maximum = 0
  let maximumWorkerName = null

  for(let [name, salary] of Object.entries(salaries)) {
    if (maximum < salary) {
      maximum = salary
      maximumWorkerName = name
    }
  }
  return maximumWorkerName
} 