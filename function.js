// flow :: ((a -> b), (b -> c), ..., (y -> z)) -> a -> z
export const flow = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

/** curry a function with two arguments
 * @sig ((a, b) -> c) -> a -> b -> c
 * @param {Function} f
 * @param {Any} x
 * @param {Any} y
 * @returns {Any} whatever the function returns
 */
const curry2 = f => x => y => f(x, y)

// curry3 :: ((a, b, c) -> d) -> a -> b -> c -> d
const curry3 = f => x => y => z => f(x, y, z)

// curry4 :: ((a, b, c, d) -> e) -> a -> b -> c -> d -> e
const curry4 = f => w => x => y => z => f(w, x, y, z)

/** convert a function to one that takes its arguments as an array
 * @sig (* -> a) -> [*] -> a
 * @param {Function} f any function
 * @param {Any[]} args arguments to pass to function
 * @returns {Any} whatever the function returns
 */
export const apply = f => (args) => f(...args)

// Functional combinators
// Reference https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45

/** Identity
 * @sig a -> a
 * @param {*} val Any value
 * @returns {*} the arg
 */
export const I = val => val

/** Compose
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f unary function
 * @param {Function} g unary function
 * @param {*} x unary function
 * @returns {Function} composed function
 */
export const B = f => g => x => f(g(x))

/** Flip order of arguments 
 * @param {Function} f binary function
 * @param {*} a any value
 * @param {*} b any value
 * @returns {Function} a function that takes arguments in reverse order
 */
export const C = f => a => b => f(b)(a)

/** @function Constant
 * @sig a -> b -> a
 * @param {*} a any value
 * @returns {Function} A Function :: * -> a
 */
export const K = a => __ => a

/**  Double apply
 * @sig (a -> a -> b) -> a -> b
 * @param {Function} f unary function
 * @returns {function} A function :: a -> b
 */
export const W = f => a => f(a)(a)


/** Thrush - Return a function that will call next passed function on the first parameter
 * Related to |> in F#
 * Anonymous partial application in a way
 * @sig a -> (a -> b) -> b
 * @param {Any} x the arg to use on next function
 * @param {Function} f function to call
 * @returns {Function} partially applied function: (a -> b) -> b
 */
export const T = x => f => f(x)

/** Substitution combinator
 * @sig (a -> b -> c) -> (a -> b) -> a -> c
 */
export const S = f => g => x => f(x)(g(x))

/** Psi
 * @sig (b -> b -> c) -> (a -> b) -> a -> a -> c
 */
export const P = f => g => x => y => f(g(x))(g(y))
