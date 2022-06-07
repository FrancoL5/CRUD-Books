const compose =
  (...fns) =>
  (arg) =>
    fns.reduceRight((val, fn) => fn(val), arg);
    
export {compose};