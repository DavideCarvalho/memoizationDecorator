# Memoization
> TypeScript decorator to memoize function results!


## Install
use one of these:
- yarn add memoization_decorator
- npm i memoization_decorator

## Using

##### Import to your application
```typescript
import memoization from 'memoization_decorator';
```

#### Decorate your method!
```typescript
class myClass {
  @memoization()
  sum(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
  }
}
```

The decorator will decorate the response based on its arguments, so if the method receive the same argument a second time, it will return the result from the cache.

You can put a time limit for the memoization duration, just send a number with the milliseconds you want the result to be cached, so if the method gets called after the this time window, it won't get the result from the cache, will do the whole operation again instead.

```typescript
class myClass {
  @memoization(100)// will be memoized for 100 ms
  sum(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
  }
  stop() {
    setTimeout(() => {}, 2000)
  }
}

myClass = new myClass();
myClass.sum(1, 2); // will memoize the result
myClass.stop();
myClass.sum(1, 2); //since the time window has passed,
//it will make the sum and memoize it again
```
