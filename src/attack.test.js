import attack from './attack';

it('should test attack', () => {
  const result = attack('Tiger', true);
  expect(result).toBe('Tiger is harmful');
});
