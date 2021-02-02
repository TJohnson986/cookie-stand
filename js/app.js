'use strict';

let hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattleList = document.getElementById('seattle');
let tokyoList = document.getElementById('tokyo');
let dubaiList = document.getElementById('dubai');
let parisList = document.getElementById('paris');
let limaList = document.getElementById('lima');

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
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    seattleList.appendChild(li);
  }
};

let tokyo = {
  name: 'Tokyo',
  minimumCustomerEachHour: 3,
  maximumCustomerEachHour: 24,
  averageCookiesSoldPerCustomer: 1.2,
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
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    tokyoList.appendChild(li);
  }
};

let dubai = {
  name: 'Dubai',
  minimumCustomerEachHour: 11,
  maximumCustomerEachHour: 24,
  averageCookiesSoldPerCustomer: 3.7,
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
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    dubaiList.appendChild(li);
  }
};

let paris = {
  name: 'Paris',
  minimumCustomerEachHour: 20,
  maximumCustomerEachHour: 38,
  averageCookiesSoldPerCustomer: 2.3,
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
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    parisList.appendChild(li);
  }
};

let lima = {
  name: 'Lima',
  minimumCustomerEachHour: 2,
  maximumCustomerEachHour: 16,
  averageCookiesSoldPerCustomer: 4.6,
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
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    limaList.appendChild(li);
  }
};

// site used - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
