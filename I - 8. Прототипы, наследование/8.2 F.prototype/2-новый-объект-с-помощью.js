'use strict'

function Car(title) {
	this.title = title
}

let obj = new Car('BMW')

let obj2 = new obj.constructor('Audi');

console.log(obj2.title)