// flow :: ((a -> b), (b -> c), ..., (y -> z)) -> a -> z
export const flow = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// apply :: (* -> a) -> [*] -> a
export const apply = f => (...args) => f(...args);
