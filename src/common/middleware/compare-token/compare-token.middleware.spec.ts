import { CompareTokenMiddleware } from './compare-token.middleware';

describe('CompareTokenMiddleware', () => {
  it('should be defined', () => {
    expect(new CompareTokenMiddleware()).toBeDefined();
  });
});
