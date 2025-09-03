type IDENTITY<T = any> = (x: T) => T

const ONE: IDENTITY<IDENTITY> = f => x => f(x)
const TWO: IDENTITY<IDENTITY> = f => x => f(f(x))
const THREE: IDENTITY<IDENTITY> = f => x => f(f(f(x)))

const toNumber = (n: IDENTITY<IDENTITY<number>>) => n(i => ++i)(0)

console.log(toNumber(ONE))
console.log(toNumber(TWO))
console.log(toNumber(THREE))
