type memoizedFunctionsType = {
  [memoizedFunctionConfiguration: any[]]: {
    lastCall?: number,
    result: any;
  }
}
const memoizedFunctions: memoizedFunctionsType = {};

type memoizedFunctionType = {
  lastCall?: number,
  result: any
}

const memozation = (memoizationDuration?: number) => {
  return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const methodStarted = parseInt(Date.now().toPrecision());
      const methodStartedInMilliseconds: number = methodStarted;
      const functionMemoizedResult: memoizedFunctionType = memoizedFunctions[args];
      if (functionMemoizedResult) {
        if (memoizationDuration) {
          if (functionMemoizedResult.lastCall) {
            const timeBetweenThisAndLastCall = functionMemoizedResult.lastCall ? methodStartedInMilliseconds - functionMemoizedResult.lastCall : methodStartedInMilliseconds;
            if (timeBetweenThisAndLastCall <= memoizationDuration) {
              const newFunctionMemoizedResult = { ...functionMemoizedResult, lastCall: methodStartedInMilliseconds };
              return functionMemoizedResult.result;
            } else {
              const result = originalMethod.apply(this, args);
              memoizedFunctions[args] = {
                lastCall: methodStartedInMilliseconds,
                result
              }
              return result;
            }
          }
        }
        return functionMemoizedResult.result;
      }
      const result = checkIfHasDuration(originalMethod, args, methodStartedInMilliseconds, memoizationDuration);
      return result;
    };
    return descriptor;
  }
}

const checkIfHasDuration = (originalMethod: any, args: any[], methodStartedInMilliseconds: number, memoizationDuration?: number) => {
  if (memoizationDuration) {
    const result = originalMethod.apply(this, args);
    memoizedFunctions[args] = {
      lastCall: methodStartedInMilliseconds,
      result
    }
    return result;
  }
  const result = originalMethod.apply(this, args);
  memoizedFunctions[args] = result;
  return result;
}

export default memozation;
