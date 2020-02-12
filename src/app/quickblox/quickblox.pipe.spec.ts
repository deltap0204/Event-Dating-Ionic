import {QuickbloxMessageToFirebasePipe} from './quickblox.pipe';

describe('QuickbloxPipe', () => {
  it('create an instance', () => {
    const pipe = new QuickbloxMessageToFirebasePipe();
    expect(pipe).toBeTruthy();
  });
});
