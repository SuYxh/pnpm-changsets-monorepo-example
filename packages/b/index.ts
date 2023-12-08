import { isEven } from '@xhtest/monorepo-pkg-a';

export const isOdd = (x: number) => !isEven(x);
