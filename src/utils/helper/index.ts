export const intentionalyFloatingPromiseReturn =
  <ARGS extends unknown[]>(fn: (...args: ARGS) => Promise<unknown>) =>
  (...args: ARGS): void =>
    void fn(...args);
