'use strict';

console.log('Hello, world');

let hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minimumCustomerEachHour: 23,
  maximumCustomerEachHour: 65,
  averageCookiesSoldPerCustomer: 6.3,
  cookiesSoldPerHourarray: [],
  dailyStoreTotal: 0,
  randomCustomerEachHour: function (){
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },

  calcCookiesSoldEachHour: function () {
    let randomCustomerForOneHour = this.randomCustomerEachHour();
    console.log(randomCustomerForOneHour);
  }
}