const isEmpty = obj => {
	for(let prop in obj) {
		return false
	}
	return true
}

let schedule = {}

alert(isEmpty(schedule))

schedule["8:30"] = "get up"

alert(isEmpty(schedule))