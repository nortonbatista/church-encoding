type IDENTITY<T = any> = (x: T) => T

const ONE: IDENTITY<IDENTITY> = f => x => f(x)
const TWO: IDENTITY<IDENTITY> = f => x => f(f(x))
const THREE: IDENTITY<IDENTITY> = f => x => f(f(f(x)))

const SUCC: IDENTITY<IDENTITY<IDENTITY>> = n => f => x => f(n(f)(x))
const PLUS: IDENTITY<IDENTITY<IDENTITY<IDENTITY>>> = m => n => f => x => m(f)(n(f)(x))
const MULTIPLY: IDENTITY<IDENTITY<IDENTITY<IDENTITY>>> = m => n => f => x => m(n(f))(x)

const toNumber = (n: IDENTITY<IDENTITY<number>>) => n(i => ++i)(0)

console.log(toNumber(ONE))
console.log(toNumber(TWO))
console.log(toNumber(THREE))

console.log(toNumber(SUCC(THREE)))
console.log(toNumber(PLUS(SUCC(THREE))(ONE)))

console.log(toNumber(MULTIPLY(TWO)(THREE)))
console.log(toNumber(MULTIPLY(THREE)(TWO)))
console.log(toNumber(MULTIPLY(SUCC(THREE))(TWO)))
