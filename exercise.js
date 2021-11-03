//BankAccount
class Account {
    constructor(accname, accno, balance) {
      this.name = accname;
      this.accno = accno;
      this.balance = balance;
      this.transactions = [];
      //this.error = "this.error = error";
    }
  
    paraYatirma(miktar) {
      if (miktar > 0) {
        this.transactions.push(miktar);
        return (this.balance = this.balance + miktar);
      } else {
         return "Geçersiz miktar.";
      }
    }
  
    paraCekme(miktar) {
      if (miktar > 0) {
        if (this.balance - miktar < 0) {
          return "Yetersiz bakiye...";
        } else {
            this.transactions.push(-miktar);
          return (this.balance = this.balance - miktar);
        }
      } else {
        return console.log("Geçersiz miktar.");
      }
    }
    get bakiyeGoster(){
        return this.balance;
    }
    get hesapOzeti(){
        return this.transactions;
    }
  }
  const account = new Account("hesabim", 123456, 0);
  account.paraYatirma(10);
  account.paraYatirma(20);
  console.log(account.balance);
  console.log(account.transactions);
  
  account.paraCekme(-5);
  console.log(account.balance);
  console.log(account.transactions);
  account.bakiyeGoster;
  account.hesapOzeti;
  console.log(account.paraCekme(-5));
  
  //Requirements:
  //+ user should be able to deposit funds into their account
  //kullanıcı hesabına para yatırabilmeli
  
  //+ user should be able to withdraw funds from their account
  //kullanıcı hesabından para çekebilmeli
  
  //+ user should be able to check their balance
  //kullanıcı bakiyesini kontrol edebilmeli
  
  //+ user should be able to see their transaction history
  //kullanıcı işlem geçmişini görebilmeli
  
  module.exports = { Account };