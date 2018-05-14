import memoization from './memoization';
import { performance } from 'perf_hooks';
import axios from 'axios';

describe('memoization decorator', () => {
  it('should only test', () => {
    class Test {
      @memoization(10)
      sum(n1: number, n2: number): number {
        return n1 + n2;
      }
    }

    const teste = new Test();
    teste.sum(1,1);
    teste.sum(1,2);
    teste.sum(1,2);
    teste.sum(1,2);
    teste.sum(1,2);
  })
})
