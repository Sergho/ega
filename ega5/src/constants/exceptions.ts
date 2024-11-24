export const MATRIX_ERRORS = {
  INCORRECT_SIZE: new Error('Incorrect matrix size'),
  INCORRECT_INDEX: new Error('Matrix index does not exist'),
};
export const VECTOR_ERRORS = {
  INCORRECT_SIZE: new Error('Incorrect vector size'),
  INCORRECT_INDEX: new Error('Vector index does not exist'),
};
export const PERMUTATION_ERRORS = {
  INCORRECT_STRUCTURE: new Error('Incorrect permutation structure'),
};
export const ESTIMATOR_ERROR = {
  INCORRECT_SIZES: new Error('Incorrect estimator inputs sizes'),
};
export const SIMULATION_ERROR = {
  INCORRECT_SIZES: new Error('Incorrect simulation inputs sizes'),
};
export const CROSSOVER_ERROR = {
  INCORRECT_PARENT_SIZES: new Error('Incorrect crossover parent sizes'),
};
