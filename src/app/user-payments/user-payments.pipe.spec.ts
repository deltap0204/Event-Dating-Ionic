import { UserPaymentsPipe } from './user-payments.pipe';

describe('UserPaymentsPipe', () => {
  it('create an instance', () => {
    const pipe = new UserPaymentsPipe();
    expect(pipe).toBeTruthy();
  });
});
