multiplier = 3

let obj = {
  multiplier: 10,

  calculate: function(value) {
    console.log('Multiplier:', this.multiplier)
    return this.multiplier * value
  }
}

console.log('Calculate func', obj.calculate)
console.log('Calculate 2:', obj.calculate(2))

let globalCalculate = obj.calculate
console.log('Global calculate 2:', globalCalculate(2))

let calcBoundToObj = obj.calculate.bind(obj)
console.log('Calculate bound to obj with 3:', calcBoundToObj(3))

let toBeBound = { multiplier: 100 }
let calcBoundToVar = obj.calculate.bind(toBeBound)
console.log('Calculate bound to var with 4:', calcBoundToVar(4))

let arrowObj = {
  multiplier: 1,
  calculate: (value) => {
    console.log('This', this)
    console.log('Multiplier', this.multiplier)
    return this.multiplier * value
  }
}

console.log('Calculate func', arrowObj.calculate)
console.log('Calculate 3', arrowObj.calculate(3))

function realObject() {
  this.multiplier = 5

  this.calculate = (value) => {
    console.log('This', this)
    return this.multiplier * value
  }
}

console.log('Real func', realObject)
console.log('Real func calculate 5:', new realObject().calculate(5))

let realObjBound = new realObject().calculate.bind({ multiplier: 100 })
console.log('Real func bound calculate 10:', realObjBound(10))
