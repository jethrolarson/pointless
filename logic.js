import {I} from './function';

/** functional ternary
 * @function ifElse
 * @sig ((a -> Boolean), (a -> b), (a -> b)) -> a -> b
 * @param {Function} pred predicate
 * @param {Function} f true case function
 * @param {Function} g false case function
 * @returns {Function} a function : a -> b
 */
export const ifElse = (pred, f, g) => x =>
    pred(x) ? f(x) : g(x)

/**
 * @sig (a -> Boolean) -> a -> Boolean
 * @param {Function} pred predicate
 * @returns {Function} logical oposite of a predicate
 */
export const not = pred => x => !pred(x)

/** strict equals
 * @sig a -> a -> Boolean
 * @param {Any} a
 * @returns {Function} compares a to it's arg : a -> Boolean
 */
export const eq = a => b => a === b

/** strict not-equals
 * @sig a -> a -> Boolean
 * @param {Any} a any value
 * @returns {Function} compares a to it's arg : a -> Boolean
 */
export const neq = a => b => a !== b

/**
 * @sig ((a -> Boolean), (a -> b)) -> a -> b
 * @param {Function} pred Predicate
 * @param {Function} f Function to run when predicate is true
 * @returns {Function} a function that when true returns the result of the second param :: a -> b
 */
export const when = (pred, f) => ifElse(pred, f, I)

/**
 * @sig ((a -> Boolean), (a -> Boolean)) -> a -> Boolean
 * @param {Function} f Predicate
 * @param {Function} g Predicate
 * @returns {Function} new predicate :: a -> Boolean
 */
export const either = (f, g) => x => f(x) || g(x)
