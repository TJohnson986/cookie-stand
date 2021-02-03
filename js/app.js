'use strict';

let hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allStores = [];
const cookieTable = document.querySelector('table');
let tbody = document.createElement('tbody');
cookieTable.appendChild(tbody);



//comment these out?
// let seattleList = document.getElementById('seattle');
// let tokyoList = document.getElementById('tokyo');
// let dubaiList = document.getElementById('dubai');
// let parisList = document.getElementById('paris');
// let limaList = document.getElementById('lima');

function Store (name, minimumCustomerEachHour, maximumCustomerEachHour, averageCookiesSoldPerCustomer){
  this.name = name;
  this.min = minimumCustomerEachHour;
  this.max = maximumCustomerEachHour;
  this.avg = averageCookiesSoldPerCustomer;
  this.cookiesSoldPerHourArray = [];
  this.dailyStoreTotal = 0;
  allStores.push(this);
}

Store.prototype.getRandomCustomerEachHour = function () {
  return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
};

Store.prototype.calcCookiesSoldEachHour = function () {
  for (let i = 0; i < hours.length; i++){
    let randomCustomerForOneHour = this.getRandomCustomerEachHour();
    let hourlyTotal = Math.ceil(randomCustomerForOneHour * this.avg);
    this.cookiesSoldPerHourArray.push(hourlyTotal);
    this.dailyStoreTotal += hourlyTotal;
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldEachHour();
  let tr = document.createElement('tr');

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldPerHourArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyStoreTotal;
  tr.appendChild(td);
  tbody.appendChild(tr);
};

function renderHeader () {
  let header = document.createElement('th');
  for (let i = 0; i < hours.length; i++){
    let th = document.createElement('th');
    th.textContent = hours[i];
    header.appendChild(th);
  }
  let th = document.createElement('th');
  th.textContent = 'Store Daily Total';
  header.appendChild(th);
}

let seattleStore = new Store('Seattle', 23, 65, 6.3, []);
let tokyoStore = new Store('tokyo', 3, 24, 1.2, []);
let dubaiStore = new Store('dubai', 11, 38, 3.7, []);
let parisStore = new Store('paris', 20, 38, 2.3, []);
let limaStore = new Store('lima', 2, 16, 4.6, []);

renderHeader();
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();

// let seattle = {
//   name: 'Seattle',
//   minimumCustomerEachHour: 23,
//   maximumCustomerEachHour: 65,
//   averageCookiesSoldPerCustomer: 6.3,
//   cookiesSoldPerHourArray: [],
//   dailyStoreTotal: 0,

//   getRandomCustomerEachHour: function (){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let randomCustomerForOneHour = this.getRandomCustomerEachHour();
//       let hourlyTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },

//   render: function() {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       seattleList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     seattleList.appendChild(li);
//   }
// };

// let tokyo = {
//   name: 'Tokyo',
//   minimumCustomerEachHour: 3,
//   maximumCustomerEachHour: 24,
//   averageCookiesSoldPerCustomer: 1.2,
//   cookiesSoldPerHourArray: [],
//   dailyStoreTotal: 0,

//   getRandomCustomerEachHour: function (){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let randomCustomerForOneHour = this.getRandomCustomerEachHour();
//       let hourlyTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },

//   render: function() {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       tokyoList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     tokyoList.appendChild(li);
//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minimumCustomerEachHour: 11,
//   maximumCustomerEachHour: 24,
//   averageCookiesSoldPerCustomer: 3.7,
//   cookiesSoldPerHourArray: [],
//   dailyStoreTotal: 0,

//   getRandomCustomerEachHour: function (){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let randomCustomerForOneHour = this.getRandomCustomerEachHour();
//       let hourlyTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },

//   render: function() {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       dubaiList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     dubaiList.appendChild(li);
//   }
// };

// let paris = {
//   name: 'Paris',
//   minimumCustomerEachHour: 20,
//   maximumCustomerEachHour: 38,
//   averageCookiesSoldPerCustomer: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyStoreTotal: 0,

//   getRandomCustomerEachHour: function (){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let randomCustomerForOneHour = this.getRandomCustomerEachHour();
//       let hourlyTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },

//   render: function() {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       parisList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     parisList.appendChild(li);
//   }
// };

// let lima = {
//   name: 'Lima',
//   minimumCustomerEachHour: 2,
//   maximumCustomerEachHour: 16,
//   averageCookiesSoldPerCustomer: 4.6,
//   cookiesSoldPerHourArray: [],
//   dailyStoreTotal: 0,

//   getRandomCustomerEachHour: function (){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let randomCustomerForOneHour = this.getRandomCustomerEachHour();
//       let hourlyTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//       this.cookiesSoldPerHourArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },

//   render: function() {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       limaList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     limaList.appendChild(li);
//   }
// };

// site used - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
