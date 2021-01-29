'use strict';

console.log('Hello, world');

let hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minimumCustomerEachHour: 23,
  maximumCustomerEachHour: 65,
  averageCookiesSoldPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  getRandomCustomerEachHour: function (){
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++){
      let randomCustomerForOneHour = this.getRandomCustomerEachHour();
      let hourlyTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
      console.log(randomCustomerForOneHour);
    }
  },
  render: function() {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      seattle.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    seattle.appendChild(li);
  }
};

// site used - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

seattle.render();
