const companies = [
    { name: 'company One', category: 'finance', start: 1981, end: 2003 },
    { name: 'company two', category: 'retail', start: 1992, end: 2008 },
    { name: 'company three', category: 'auto', start: 1999, end: 2007 },
    { name: 'company four', category: 'retail', start: 1989, end: 2010 },
    { name: 'company five', category: 'technology', start: 2009, end: 2014 },
    { name: 'company six', category: 'finance', start: 1987, end: 2010 },
    { name: 'company seven ', category: 'auto', start: 1986, end: 1996 },
    { name: 'company eight', category: 'technology', start: 2011, end: 2016 },
    { name: 'company nine', category: 'retail', start: 1981, end: 1989 }

];

const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);

// }


// FOREACH METHD


// companies.forEach(function (company) {
//     console.log(company.name);
// })
// get 21 and older.
// let canDrink = [];
// for (let i = 0; i < age.length; i++) {
//     if (age[i] >= 21) {
//         canDrink.push(age[i])
//     }
// }
// console.log(canDrink);


// FILTER METHOD


// const canDrink = age.filter(function (ages) {
//     if (ages >= 21) {
//         return true
//     }
// });


// const canDrink = age.filter(ages => ages >= 21);
// console.log(canDrink);

// filter retail company
// const retailCompany = companies.filter(function (company) {
//     if (company.category === 'auto') {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(retailCompany);


// const retailCompany = companies.filter(company => company.category === 'auto');
// console.log(retailCompany);

// get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
// console.log(eightiesCompanies);

// const endedon20s = companies.filter(company => company.end >= 2000 && company.end < 2010);
// console.log(endedon20s);

// get companies that lasted 10 years or MutationRecord.

// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))
// console.log(lastedTenYears);

// // create array of comapny names

// MAP METHOD


// const companyName = companies.map(function (company) {
//     return company.name;
// })
// console.log(companyName);

// const companyName = companies.map(company => company.name)
// console.log(companyName);

// const testMap = companies.map(company =>
//     `${company.name}: [${company.start} - ${company.end}]`

// )
// console.log(testMap);

// const agesSquare = age.map(age => Math.sqrt(age));
// console.log(agesSquare);

// const agesTwoTimes = age.map(ages => ages * 2)
// console.log(agesTwoTimes);

// const ageMap = age.map(ages => Math.sqrt(ages)).
//     map(ages => ages * 2);
// console.log(ageMap);

// sort METHOD
// const sortedCompanies = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1
//     }
// })
// console.log(sortedCompanies);


// I DON'T UNDERSTAD THIS  SO I HAVE TO WORK MORE ON THIS ONE
// const sortedCompanies = companies.sort((c1, c2) =>
//     c1.start > c2.start ? 1 : -1)
// console.log(sortedCompanies);

// SORT AGE

// const sortAge = age.sort((a, b) => a - b);
// console.log(sortAge);

// reduce METHOD

// let ageSum = 0;
// for (let i = 0; i < age.length; i++) {
//     ageSum += age[i];
// }
// console.log(ageSum);

// const ageSum = age.reduce(function(total, age){
//     return total + age;
// }, 0)
// console.log(ageSum);


// const ageSum = age.reduce((total, age) =>
//     total + age, 0);
// console.log(ageSum);

// get total years for all companies

// const totalYears = companies.reduce(function (total, company) {
//     return total + (company.end - company.start);
// }, 0)
// console.log(totalYears);


// const totalYears = companies.reduce((total, company) => {
//     return total + (company.end - company.start)
// }, 0)
// console.log(totalYears);


// combine methods (SABAI METHOD LAI YEKAI THAUMA USE GAREKO)

const combined = age
    .map(ages => ages * 2)
    .filter(ages => ages >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);