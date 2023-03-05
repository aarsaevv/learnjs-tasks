'use strict'


// Используя setInterval

const printNumbers = (from, to) => {
    let i = from

    function interval() {
        console.log(i)
        if(i === to) clearInterval(id)
        i++
    }

    interval()
    let id = setInterval(interval, 1000)
}

// Используя рекурсивный setTimeout

const printNumbers = (from, to) => {
    let i = from
    
    setTimeout(function timeout() {
        console.log(i)
        if(i < to) {
            setTimeout(timeout, 1000)
        }
        i++
    })
}

console.log(printNumbers(1, 5))