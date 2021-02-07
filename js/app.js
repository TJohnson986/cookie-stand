'use strict';

let hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allStores = [];
let cookieTable = document.getElementById('cookie-table');
let tbody = document.createElement('tbody');
cookieTable.appendChild(tbody);

let allTotals = [];
let grandTotal = 0;


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
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
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
  cookieTable.appendChild(tr);

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
  let header = document.getElementById('first-row');
  for (let i = 0; i < hours.length; i++){
    let th = document.createElement('th');
    th.textContent = hours[i];
    header.appendChild(th);
  }
  let th = document.createElement('th');
  th.textContent = 'Store Daily Total';
  header.appendChild(th);
}

function renderFooter () {
  calcAllTotals();
  let tfoot = document.createElement('tfoot');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  for (let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    td.textContent = allTotals[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);

  tfoot.appendChild(tr);
  cookieTable.appendChild(tfoot);
}

function calcAllTotals() {
  allTotals = [];
  grandTotal = 0;
  for (let i = 0; i < hours.length; i++){
    let hourTotal = 0;
    for (let j = 0; j < allStores.length; j++){
      hourTotal += allStores[j].cookiesSoldPerHourArray[i];
    }
    allTotals.push(hourTotal);
    grandTotal += hourTotal;
  }
}

let seattleStore = new Store('Seattle', 23, 65, 6.3, []);
let tokyoStore = new Store('Tokyo', 3, 24, 1.2, []);
let dubaiStore = new Store('Dubai', 11, 38, 3.7, []);
let parisStore = new Store('Paris', 20, 38, 2.3, []);
let limaStore = new Store('Lima', 2, 16, 4.6, []);

renderHeader();
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();
renderFooter();
