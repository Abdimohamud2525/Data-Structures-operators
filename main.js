"use strict";



// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


/////// ASSIGNMENT CHALLENGE

// //1  ASSIGNMENT

// const [playesr1, players2] = game.players;
// // console.log(playesr1, players2);

// //2
// const [gk, ...filedPlyers] = playesr1;
// console.log(gk, filedPlyers);

// // 3
// const allPlayers = [...playesr1, ...players2];
// // console.log(allPlayers);

// // 4
// const players1Final = ["Thiago", ["Coutinho", ["Perisic"], ...playesr1]];
// console.log(players1Final);

// //5
// const {
//   odds: { team1, x: drow, team2 },
// } = game;

// console.log(team1, drow, team2);
// //6
// function printGoals(...players) {
//   console.log(`${players.length} were scored`);
// }
// // printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// // printGoals("Davies", "Muller");
// printGoals(...game.scored);

// // wich team win
// team1 < team2 && console.log("team1 win");
// team1 > team2 && console.log("team2 win");




//OPENING HOURS
// const openinHours = {
//   mon: {
//     open: 10,
//     close: 22,
//   },
//   thu: {
//     open: 9,
//     close: 21,
//   },
//   sat: {
//     open: 0,
//     close: 19,
//   },
// };

// RESTAURANT
// const restaurant = {
//   name: "SomMaqaaxi",
//   local: "itäkeskus 0080 helsinki",
//   categories: ["baris", "baasto", "canjeero", "sambus"],
//   starterMenu: ["salad", "maraq", "cambuulo"],
//   mainMenu: ["baris ", "baasto", "canjeero"],
//   // ES6 enhance object literals
//   openinHours,

//   order(startindex, mainIndex) {
//     return [this.starterMenu[startindex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery(startindex, mainIndex, time, adress) {
//     console.log(
//       `order received  ${this.starterMenu[startindex]} and ${this.mainMenu[mainIndex]} will be delivary adress ${adress} time will be ${time}`
//     );
//   },
//   orderpasta(ing1, ing2, ing3) {
//     console.log(`here is you delicious pasta withe ${ing1}, ${ing2}, ${ing3} `);
//   },
//   pizzoder(ingriesten, ...onothers) {
//     console.log(ingriesten);
//     console.log(onothers);
//   },
// };
// console.log(restaurant)
// restaurant.orderDelivery({
//   time: 19,
//   adress: "bahaakatu",
//   mainIndex: 1,
//   starterMenu: 1,
// });
// // console.log(restaurant.order(0, 1))
// const { name, openinHours, categories } = restaurant;
// console.log(name, openinHours, categories);

// // hadii aad rabtit magaca kale inaa u bixid
// const { name: topsom, openinHours: hours, categories: tags } = restaurant;
// console.log(name, hours, tags);

// //default value
// const { menu = [], starterMenu: start = [], openinHours: opne } = restaurant;
// console.log(menu, start, opne);

// // mutating variable

// // let a = 100
// // let b = 200
// // const obj = { a: 10, b: 20, c: 40 };
// // ({ a, b } = obj)
// // console.log(a, b)

// // nested object
// const {
//   to: { open: o, close: c },
// } = openinHours;
// console.log(o, c);

// ARRAYS
// //array
// // marka aad rabtit inaa kan kowaad iyp labaad daawaxatit
// // let [main, secondry] = restaurant.categories
// // console.log(main, secondry)

// // //destruction array

// // without //destruction array
// // let temp = main;
// // main = secondry;
// // secondry = temp;
// // console.log(main, secondry)

// // [main, secondry] = [secondry, main]
// // console.log(main, secondry)

// // hadii order aab u baahatit startmenu iyo mainmenu
// // const [start, manu] = (restaurant.order(0, 0));
// // console.log(start, manu)

// // //nested destruction (sisäkaista array)

// // const nested = [10, 20, [50, 80]]
// // // const [i, , j] = nested;
// // // console.log(i, j)
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k)

// // // defautl values

// // const [p = 1, q = 1, r = 1] = [10,];
// // console.log(p, q, r)

// /////////////////////////////////////////////////////////
// //. Rest Pattern and Parameters

// //rest
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a, b, others);

// //real live example

// const [baris, canjeero, anothers] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(baris, canjeero, anothers);

// // objects
// const { mon, ...weeksdays } = restaurant.openinHours;
// console.log(weeksdays);

// //function

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(3, 5);
// add(30, 10);
// add(300, 10);
// const x = [5, 3, 7];
// add(...x);

// // pizzoder

// restaurant.pizzoder = ["cheese, majones, chicken"];


// //The Spread Operator (...)

// let array = [10, 40, 70];
// let badarray = [100, 300, array[0], array[1], array[2]];
// console.log(badarray);

// let newarra = [15, 24, ...array];
// console.log(newarra);

// let newmenu = [...restaurant.mainMenu, "sabaayad"];
// console.log(newmenu);

// let newstartMenu = [...restaurant.starterMenu, "sanbuus"];
// console.log(newstartMenu);

// // copy array
// let manMenuCopy = [...restaurant.mainMenu];
// console.log(manMenuCopy);
// // join 2 arrays
// let joinTwoArrays = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // Iterables: strings, map, set, No objects
// let str = "maxamud";
// let letters = [...str, "", "m"];
// console.log(letters);

// // let ingpasta = [prompt('let\'s make pasta ingriest1'), prompt('let\'s make pasta ingriest2'), prompt('let\'s make pasta ingriest3')]

// // console.log(ingpasta)

// // restaurant.orderpasta(...ingpasta)

// //objest

// const newResturant = { Amm: 2023, ...restaurant, founder: "mrmaxamud" };
// console.log(newResturant);

// const copyRESTURENT = { ...restaurant };
// copyRESTURENT.name = "MIM";
// console.log(copyRESTURENT);
// console.log(restaurant.name);

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // Short Circuiting (&& and ||

// console.log(3 || "maxamud");
// console.log("" || undefined || "cabdi");
// console.log("" || 0 || "hello" || 40);

// // restaurant.Numberguest = 0
// // const guest = restaurant.Numberguest ? restaurant.Numberguest : 10
// // console.log(guest)
// // // or
// // const guest2 = restaurant.Numberguest || 11
// // console.log(guest2)

// const rest1 = {
//   name: "hot pizzeria",
//   owner: "maxamud",
// };
// const rest2 = {
//   name: "cold bizzeria",
//   Numberguest: 20,
// };
// //and
// if (restaurant.orderpasta) {
//   restaurant.orderpasta("cheese");
// }

// restaurant.orderpasta ?? restaurant.orderpasta("chili");

// //nullish assigement operator
// // rest1.Numberguest = rest1.Numberguest || 10
// // rest2.Numberguest = rest2.Numberguest || 10

// rest1.Numberguest ||= rest2.Numberguest ||= console.log(rest1);
// console.log(rest2);

//////////////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENAGE 2
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */


// assigment1  Loop over the game.scored array and print each player name to the console

// let score = [...game.scored];
// for (const [i, el] of score.entries()) {
//   console.log(`Goa${i + 1}, ${el} `)

// }

// // assigment  calculate the average odd and  2

// let odds = Object.values(game.odds)
// let ovarage = 0
// for (const odd of odds) ovarage += odd
// ovarage /= odds.length;
// console.log(ovarage)


// // Print the 3 odds to the console,  3

// console.log('Odd of victory Bayern Munich:' + `${game.odds.team1}`)
// console.log(' Odd of draw:' + `${game.odds.x}`)
// console.log(' Odd of victory Borrussia Dortmund:' + `${game.odds.team2}`)







///////////////////////////////////////////////////////////////////////////

// Looping Arrays: The for-of Loop

// NO withe out for-of
// for (let i = 0; i < restaurant.starterMenu.length; i++) {
//   console.log(restaurant.starterMenu[i])
// }

// The for-of Loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]

// for (const item of menu) console.log(item)

// // if you whant to index use entries
// for (const [i, el] of menu.entries()) {
//   console.log(`${ i + 1}: ${ el } `)
// }





////////////////////////////////////////////////////////////////////////////////////////7
//. Optional Chaining


// if (restaurant.openinHours.friday) {
//   console.log(restaurant.openinHours ?? restaurant.openinHours.friday.open)
// }

//withe Optional Chaining

// console.log(restaurant.openinHours.friday?.open)
// console.log(restaurant.openinHours?.friday?.open)

// //exampale
// const days = ['mon', 'tue ', 'wed', 'thu', 'fri', 'sat', 'sun']
// for (const day of days) {
//   // console.log(day)
//   const open = restaurant.openinHours[day]?.open ?? 'close'
//   console.log(`on ${ day } we are open at  ${ open }`)
// }

// //methot
// console.log(restaurant.order?.(0, 1)) ?? "methot not exit"

// // arays
// const user = []
// console.log(user[0]?.name ?? "its emty array")

// // adigo oo san dhahdy ayee lamid tahay

// if (user.length < 0) {
//   console.log(user?.name)
// }
// else {
//   console.log("not found")
// }

/////////////////////////////////////////////////////////////////////////////////
//  Looping Objects: Object Keys, Values, and Entries
// property Names
// const propert = Object.keys(openinHours)
// console.log(propert)

// let openstr = ` we are open ${ propert.length }
//  days `


// for (const day of Object.keys(openinHours)) {
//   openstr += `${day}`
// }
// console.log(openstr)

// //property value
// const values = Object.values(openinHours)
// console.log(values)

// //entire object
// const entire = Object.entries(openinHours)
// console.log(entire)

// for (const [key, { open, close }] of entire) {
//   console.log(`on ${key} we are open ${open} and close ${close}`)
// }

//////////////////////////////////////////////////////////////////////////////////////////
// maps
const rest = new Map();
rest.set("name", 'som')
rest.set(1, 'bahamnakatu111')
rest.set(2, 'itäkeskus')
rest.set('categories:', ["baris", "baasto", "canjeero", "sambus"]).set('open', 8).set('close', 23)
rest.set(true, 'we are open D:')
rest.set(false, 'we are close:')
console.log(rest)

// here you console
console.log(rest.get(true))
console.log(rest.get(1))
console.log(rest.get(false))
console.log(rest.get('open'))


// let chack if store is open this time
const time = 11

console.log(rest.get(time > rest.get('open') ?? time < rest.get('close')))

// find if elemet is there
console.log(rest.has(1))
// delet
rest.delete("open")
console.log(rest)
//size
console.log(rest.size)
//clear
rest.clear()
console.log(rest)

///////////////////////////////////////////////////////////////////////////////////////////////
// SET
// const orderSet = new Set(['pizza', 'kebab', 'pasta', 'pizza', 'kebab'])
// console.log(orderSet)

// // console name
// console.log(new Set('maxamud'))

// // console size of orderSet
// console.log(orderSet.size)

// // chck if word in orderlist
// console.log(orderSet.has('bariis'))
// console.log(orderSet.has('pizza'))
// // addi new elemet
// orderSet.add("canjeero")
// orderSet.delete("pizza")
// console.log(orderSet)

// // you can also loop
// for (const orderlist of orderSet) console.log(orderlist)

// // you can also make array fist then cange new set

// const shoppingStore = ['Nike', 'Puma', 'Adidas', 'puma', 'Nika']

// const staffUnique = [...new Set(shoppingStore)]
// console.log(staffUnique)