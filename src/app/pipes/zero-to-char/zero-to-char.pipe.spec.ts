import { ZeroToCharPipe } from './zero-to-char.pipe';

describe('ZeroToCharPipe', () => {
  it('create an instance', () => {
    const pipe = new ZeroToCharPipe();
    expect(pipe).toBeTruthy();
  });
});
