const {Account} = require("./exercise.js");

describe('should check if account is an object', () => {
    it('returns an object', () => {
        const account = new Account("hesabim", 123456, 0);
        expect(account).toBeInstanceOf(Object);
    });
});
describe('user should be able to deposit funds into their account', () => {
    it('kullanicinin hesabina para yatirabilmeli', () => {
    const account = new Account("hesabim", 123456, 0);
    account.paraYatirma(5);
    account.paraYatirma(10);
    expect(account.balance).toBe(15);
    });
    it('negative gives error', () => {
    const account = new Account("hesabim", 123456, 0);
    account.paraYatirma(-5);
    expect(account.balance).toBe(0);
    });
    it('negative gives error', () => {
        const account = new Account("hesabim", 123456, 0);
        account.paraYatirma(-5);
        expect(account.paraYatirma(-5)).toBe("Geçersiz miktar.");
        });
});
describe('kullanıcı hesabından para çekebilmeli', () => {
    it('kullanıcı hesabından para çekebilmeli', () => {
    const account = new Account("hesabim", 123456, 0);
    account.paraYatirma(50);
    account.paraCekme(10);
    expect(account.balance).toBe(40);
    });
    it('gets error', () => {
        const account = new Account("hesabim", 123456, 0);
        account.paraCekme(10);
        expect(account.paraCekme(10)).toBe("Yetersiz bakiye...");
    })
    
});
describe('kullanıcı bakiyesini kontrol edebilmeli', () => {
    it('bakiye goster', () => {
        const account = new Account("hesabim", 123456, 50);
        account.bakiyeGoster;
        expect(account.bakiyeGoster).toBe(50);
    });
});
describe('kullanıcı işlem geçmişini görebilmeli', () => {
    it('islem gecmisi', () => {
        const account = new Account("hesabim", 123456, 50);
        account.hesapOzeti;
        expect(account.hesapOzeti).toEqual(account.transactions);
    });
});

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  