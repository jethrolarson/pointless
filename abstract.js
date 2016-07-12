// Curried point-free interface for fantasy land types.

// Convert a function that operates on a value one that operates on a functor with that value
// lift1 :: Functor F => (a -> b) -> F a -> F b
export const lift1 = f => x => x.map(a => f(a));

// curry2 :: ((a, b) -> c) -> a -> b -> c
const curry2 = f => x => y => f(x, y);

// lift2 :: Applicative A => ((a, b) -> c) -> (A a, A b) -> A c
export const lift2 = f => (x, y) => x.of(curry2(f)).ap(x).ap(y);

// chain :: Monad M => (a -> M b) -> M a -> M b
export const chain = f => x => x.chain(a => f(a));

// concat :: Monoid M => M a -> M a -> M a
export const concat = a => b => a.concat(b);

// ap :: Applicative A => A a -> A (a -> b) -> A b
export const ap = a => af => af.ap(a);

// Point-free pattern matching for types that implement it
// Useful for disjunctions (Maybe, Either, Task, etc)
// cata :: Functor F => ({a -> b}) -> F a -> b
export const cata = mapping => obj => obj.cata(mapping);
